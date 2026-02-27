async function getName() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        
        // ใช้ map เพื่อดึงชื่อจากผลลัพธ์ที่ได้
        const nameListItems = result.map(user => {
            return `<li>${user.name}</li>`; // สร้าง HTML สำหรับแสดงชื่อ
        }).join(""); // .join("") เพื่อรวมเป็นสตริงเดียว

        // แสดงชื่อทั้งหมดใน element ที่มี id='nameList'
        nameList.innerHTML = nameListItems;

    } catch (error) {
        console.error(error.message);
    }
}

const nameList = document.getElementById('nameList');
getName(); // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูล