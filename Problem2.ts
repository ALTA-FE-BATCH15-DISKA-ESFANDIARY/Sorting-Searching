function binarySearch(employees: { id: number; nama: string; }[], targetId: number): { id: number; nama: string; } | null {
    let first = 0;
    let last = employees.length - 1;
  
    while (first <= last) {
      let middle = Math.floor((first + last) / 2);
      if (employees[middle].id === targetId) {
        return employees[middle];
      } else if (employees[middle].id < targetId) {
        first = middle + 1;
      } else {
        last = middle - 1;
      }
    }
    return null;
  }
  
  const dataKaryawan = [
    { id: 101, nama: "Rani" },
    { id: 203, nama: "Andi" },
    { id: 305, nama: "Budi" },
    { id: 410, nama: "Cindy" },
    { id: 520, nama: "Dodi" },
    { id: 635, nama: "Eka" },
    { id: 742, nama: "Fani" },
  ];
  
  const targetId = 305;
  const result = binarySearch(dataKaryawan, targetId);
  
  if (result) {
    console.log("Karyawan ditemukan:", result);
  } else {
    console.log(result);
  }
  