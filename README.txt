
DMZ Office Website
==================

เปิด index.html เพื่อเริ่มใช้งาน

โครงสร้าง:
- index.html                  หน้าแรก
- servers.html                รายการ Server
- server-e5-16xx.html         รายละเอียด Server ระดับเริ่มต้น
- server-e5-26xx.html         รายละเอียด Server ระดับกลาง
- server-e5-46xx.html         รายละเอียด Server ระดับสูงสุด
- vps.html                    รายละเอียด VPS
- vpn.html                    รายละเอียด DMZvp VPN
- ssh.html                    รายละเอียด SSH
- network.html                ความรู้ Network Engineering
- contact.html                ติดต่อ
- css/style.css               ดีไซน์ทั้งหมด
- js/main.js                  เมนูมือถือ + Animation
- images/mascot-reference.png รูปที่ผู้ใช้ส่งมา ใช้เป็นภาพอ้างอิง/มาสคอตในเวอร์ชันแรก

ข้อมูลที่ใส่ตามโจทย์:
Server ต่ำสุด: Xeon E5 16xx / RAM 112 GB / ROM 500 GB / ปรับแต่งได้
Server กลาง: Xeon E5 26xx / RAM 128 GB / ROM 500 GB / ปรับแต่งได้
Server สูงสุด: Xeon E5 46xx / RAM 256 GB / ROM 1 TB / ปรับแต่งได้
VPS: 8 Cores / RAM 10 GB / ROM 100 GB
DMZvp VPN: 22 Cores / RAM 92 GB / ROM 200 GB
SSH: สเปกเดียวกับ VPN

หมายเหตุ:
- ยังไม่มีการใส่ "ราคา" เพราะยังไม่ได้รับข้อมูลราคา
- ช่องทางติดต่อยังเป็น placeholder
- เว็บไซต์เป็น static HTML/CSS/JS เปิดได้โดยไม่ต้องติดตั้ง backend


อัปเดต v2: เพิ่ม Chibi mascot 15 ท่าจากภาพที่ผู้ใช้ส่งมา และวางท่าต่าง ๆ เป็นตัวตกแต่งตามหน้า UI.


v3 เพิ่มระบบ Light / Dark Mode:
- ปุ่ม 🌙/☀️ อยู่บนเมนูทุกหน้า
- จำโหมดที่เลือกด้วย localStorage
- รีเฟรชหรือเปลี่ยนหน้าแล้วโหมดเดิมยังคงอยู่
- ปรับสีพื้นหลัง การ์ด เมนู ปุ่ม และข้อความให้เหมาะกับโหมดมืด
