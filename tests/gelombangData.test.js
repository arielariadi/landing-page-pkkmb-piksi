/* eslint-disable no-undef */
// Mock data untuk pengujian dengan dua periode Gelombang 1
const currentYear = new Date().getFullYear();
const previousYear = new Date().getFullYear() - 1;
const nextYear = new Date().getFullYear() + 1;
const gelombangData = [
	{
		gelombang: 'Gelombang 1',
		tanggalMulai: new Date(previousYear, 10, 1), // 1 November tahun sebelumnya
		tanggalSelesai: new Date(currentYear, 0, 30), // 30 Januari tahun sekarang
	},
	{
		gelombang: 'Gelombang 1',
		tanggalMulai: new Date(currentYear, 10, 1), // 1 November tahun sekarang
		tanggalSelesai: new Date(nextYear, 0, 30), // 30 Januari tahun depan
	},
	{
		gelombang: 'Gelombang 2',
		tanggalMulai: new Date(currentYear, 0, 31), // 31 Januari tahun ini
		tanggalSelesai: new Date(currentYear, 3, 30), // 30 April tahun ini
	},
	{
		gelombang: 'Gelombang 3',
		tanggalMulai: new Date(currentYear, 4, 1), // 1 Mei tahun ini
		tanggalSelesai: new Date(currentYear, 5, 30), // 30 Juni tahun ini
	},
	{
		gelombang: 'Gelombang 4',
		tanggalMulai: new Date(currentYear, 6, 1), // 1 Juli tahun ini
		tanggalSelesai: new Date(currentYear, 7, 30), // 30 Agustus tahun ini
	},
	{
		gelombang: 'Gelombang 5',
		tanggalMulai: new Date(currentYear, 8, 1), // 1 September tahun ini
		tanggalSelesai: new Date(currentYear, 8, 30), // 30 September tahun ini
	},
	{
		gelombang: 'Gelombang 6',
		tanggalMulai: new Date(currentYear, 9, 1), // 1 Oktober tahun ini
		tanggalSelesai: new Date(currentYear, 9, 11), // 11 Oktober tahun ini
	},
];

// Fungsi untuk mengecek rentang tanggal (sama seperti sebelumnya)
const isDateInRange = (date, startDate, endDate) => {
	const checkDate = new Date(date);
	const start = new Date(startDate);
	const end = new Date(endDate);

	checkDate.setHours(0, 0, 0, 0);
	start.setHours(0, 0, 0, 0);
	end.setHours(0, 0, 0, 0);

	// Jika rentang tanggal melintasi tahun baru
	if (start > end) {
		return checkDate >= start || checkDate <= end;
	}

	return checkDate >= start && checkDate <= end;
};

// Fungsi untuk mendapatkan gelombang aktif
const getActiveGelombang = (currentDate, gelombangData) => {
	return gelombangData.filter(item =>
		isDateInRange(currentDate, item.tanggalMulai, item.tanggalSelesai)
	);
};

describe('Pendaftaran Gelombang 1', () => {
	// Variabel untuk tahun saat ini dan tahun sebelumnya
	const currentYear = new Date().getFullYear();
	const previousYear = currentYear - 1;
	const nextYear = currentYear + 1;

	// Test case untuk Gelombang 1 periode pertama (November tahun sebelumnya - Januari tahun sekarang)
	test('Gelombang 1 Periode Pertama - Tanggal di dalam rentang', () => {
		const testDates = [
			new Date(previousYear, 10, 1), // Awal Gelombang 1, tahun sebelumnya (1 November)
			new Date(previousYear, 11, 25), // Pertengahan Gelombang 1, tahun sebelumnya (25 Desember)
			new Date(currentYear, 0, 30), // Akhir Gelombang 1, tahun sekarang (30 Januari)
		];

		testDates.forEach(date => {
			const activeGelombang = getActiveGelombang(date, gelombangData);
			expect(activeGelombang).toHaveLength(1); // Memastikan hanya satu gelombang yang aktif
			expect(activeGelombang[0].gelombang).toBe('Gelombang 1');
		});
	});

	// Test case untuk Gelombang 1 periode kedua (November tahun sekarang - Januari tahun depan)
	test('Gelombang 1 Periode Kedua - Tanggal di dalam rentang', () => {
		const testDates = [
			new Date(currentYear, 10, 1), // Awal Gelombang 1, tahun sekarang (1 November)
			new Date(currentYear, 11, 25), // Pertengahan Gelombang 1, tahun sekarang (25 Desember)
			new Date(nextYear, 0, 30), // Akhir Gelombang 1, tahun depan (30 Januari)
		];

		testDates.forEach(date => {
			const activeGelombang = getActiveGelombang(date, gelombangData);
			expect(activeGelombang).toHaveLength(1); // Memastikan hanya satu gelombang yang aktif
			expect(activeGelombang[0].gelombang).toBe('Gelombang 1');
		});
	});

	// Test case untuk batas tanggal kedua periode
	test('Batas Tanggal Gelombang 1', () => {
		const edgeCases = [
			{
				date: new Date(previousYear, 10, 1), // Awal Gelombang 1 periode pertama (1 November tahun sebelumnya)
				expectedGelombang: 'Gelombang 1',
			},
			{
				date: new Date(currentYear, 0, 30), // Akhir Gelombang 1 periode pertama (30 Januari tahun sekarang)
				expectedGelombang: 'Gelombang 1',
			},
			{
				date: new Date(currentYear, 10, 1), // Awal Gelombang 1 periode kedua (1 November tahun sekarang)
				expectedGelombang: 'Gelombang 1',
			},
			{
				date: new Date(nextYear, 0, 30), // Akhir Gelombang 1 periode kedua (30 Januari tahun depan)
				expectedGelombang: 'Gelombang 1',
			},
		];

		edgeCases.forEach(testCase => {
			const activeGelombang = getActiveGelombang(testCase.date, gelombangData);
			expect(activeGelombang).toHaveLength(1);
			expect(activeGelombang[0].gelombang).toBe(testCase.expectedGelombang);
		});
	});

	// Test case untuk tanggal di luar rentang Gelombang 1
	test('Tanggal di Luar Rentang Gelombang 1', () => {
		const testDates = [
			// Tanggal yang tidak masuk di dalam Gelombang manapun
			new Date(currentYear, 9, 12), // 12 Oktober
			new Date(currentYear, 9, 31), // 31 Oktober
		];

		testDates.forEach(date => {
			const activeGelombang = getActiveGelombang(date, gelombangData);
			expect(activeGelombang).toHaveLength(0);
		});
	});
});

describe('Pendaftaran Gelombang 2', () => {
	const currentYear = new Date().getFullYear();

	// Test case rentang tanggal Gelombang 2
	test('Gelombang 2 - Tanggal di dalam rentang', () => {
		const testDates = [
			new Date(currentYear, 0, 31), // Awal gelombang 2
			new Date(currentYear, 2, 15), // Tengah gelombang 2
			new Date(currentYear, 3, 30), // Akhir gelombang 2
		];

		testDates.forEach(date => {
			const activeGelombang = getActiveGelombang(date, gelombangData);
			expect(activeGelombang).toHaveLength(1); // Memastikan hanya satu gelombang yang aktif
			expect(activeGelombang[0].gelombang).toBe('Gelombang 2');
		});
	});

	// Test case untuk batas tanggal Gelombang 2
	test('Batas Tanggal Gelombang 2', () => {
		const edgeCases = [
			{
				date: new Date(currentYear, 0, 31), // Awal Gelombang 2
				expectedGelombang: 'Gelombang 2',
			},
			{
				date: new Date(currentYear, 3, 30), // Akhir Gelombang 2
				expectedGelombang: 'Gelombang 2',
			},
		];

		edgeCases.forEach(testCase => {
			const activeGelombang = getActiveGelombang(testCase.date, gelombangData);
			expect(activeGelombang).toHaveLength(1); // Memastikan hanya satu gelombang yang aktif
			expect(activeGelombang[0].gelombang).toBe(testCase.expectedGelombang);
		});
	});
});
