// Test
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click', () => {
    // สั่งให้ body สลับคลาส dark-mode ไปมา
    document.body.classList.toggle('dark-mode');
    
    // ลองเปลี่ยนข้อความในปุ่มดูด้วย
    if (document.body.classList.contains('dark-mode')) {
        btn.innerText = "เปลี่ยนเป็นโหมดสว่าง";
    } else {
        btn.innerText = "เปลี่ยนเป็นโหมดมืด";
    }
});

const fontBtn = document.getElementById("increaseFontSize");
const h1 = document.getElementById("welcome");

fontBtn.addEventListener("click", () => {
    h1.classList.toggle("big-text");

    if(h1.classList.contains("big-text")){
        fontBtn.innerText = "ลดขนาดตัวอักษร";
    } else {
        fontBtn.innerText = "เพิ่มขนาดตัวอักษร";
    }
});

const ChangeColorBtn = document.getElementById("ChangeColor");

ChangeColorBtn.addEventListener('click', () => {
    h1.classList.toggle("change-color");

    if(h1.classList.contains("change-color")){
        ChangeColorBtn.innerText = "สีปกติ";
    } else {
        ChangeColorBtn.innerText = "สีแดง";
    }

});

const quoteText = document.getElementById('quoteText');
const quoteBtn = document.getElementById('quoteBtn');

// ฟังก์ชันสำหรับไปดึงข้อมูล
async function getQuote() {
    try {
        quoteText.innerText = "กำลังโหลด...";
        
        // 1. ไปขอข้อมูลจาก API (ใช้ URL นี้เป็นตัวอย่าง)
        const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
        
        // 2. แปลงข้อมูลที่ได้มาเป็น JSON (รูปแบบที่ JS อ่านง่าย)
        const data = await response.json();
        
        // 3. เอาข้อมูลไปโชว์ใน HTML
        // (โครงสร้างข้อมูลแต่ละที่อาจไม่เหมือนกัน ต้องลอง console.log ดู)
        quoteText.innerText = `"${data.data.content}"`;
        
    } catch (error) {
        quoteText.innerText = "เกิดข้อผิดพลาดในการดึงข้อมูล";
        console.error(error);
    }
}

// คลิกปุ่มแล้วให้รันฟังก์ชัน
quoteBtn.addEventListener('click', getQuote);

// รันครั้งแรกตอนโหลดหน้าเว็บเลย
getQuote();