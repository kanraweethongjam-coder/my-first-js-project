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