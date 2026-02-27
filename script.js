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
const h1 = document.getElementById("wellcome");

fontBtn.addEventListener("click", () => {
    h1.classList.toggle("big-text");

    if(h1.classList.contains("big-text")){
        fontBtn.innerText = "ลดขนาดตัวอักษร";
    } else {
        fontBtn.innerText = "เพิ่มขนาดตัวอักษร";
    }
});

const ChangeColorBtn = document.getElementById("ChangeColor");
const h1_ChangeColor = document.getElementById("wellcome")

ChangeColorBtn.addEventListener('click', () => {
    h1_ChangeColor.classList.toggle("change-color");

    if(h1_ChangeColor.classList.contains("change-color")){
        ChangeColorBtn.innerText = "สีปกติ";
    } else {
        ChangeColorBtn.innerText = "สีแดง";
    }

});