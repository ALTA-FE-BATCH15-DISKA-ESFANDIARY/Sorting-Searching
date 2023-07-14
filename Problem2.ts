interface Employee {
    id: number;
    nama: string;
  }
  
  function binarySearch(employees: Employee[], targetId: number): Employee | null {
    let left = 0;
    let right = employees.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (employees[middle].id === targetId) {
        return employees[middle];
      }
  
      if (employees[middle].id < targetId) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  
    return null;
  }
  
  const dataKaryawan: Employee[] = [
    { id: 101, nama: "Rani" },
    { id: 203, nama: "Andi" },
    { id: 305, nama: "Budi" },
    { id: 410, nama: "Cindy" },
    { id: 520, nama: "Dodi" },
    { id: 635, nama: "Eka" },
    { id: 742, nama: "Fani" },
  ];
  
//   const targetId = 100;
  const targetId = 305;
  const result = binarySearch(dataKaryawan, targetId);
  
  if (result) {
    console.log("Karyawan ditemukan:", result);
  } else {
    console.log(result);
  }
  