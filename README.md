# javaScript_basic
js สร้างขึ้นมาเพื่อทำให้เว็บเพจมีการตอบสนองต่อผู้ใช้ เช่น click hover change


Case sensitive 
    - var  Aa != var aa

Data type
    var เป็น global scope ไม่แนะนำให้ใช้
    let เป็น block scope เปลี่ยนค่าได้ในภายหลัง
    const เป็น block scope เก็บค่าคงที่ เปลี่ยนค่าในภายหลังไม่ได้

Array
    - var cars = new Array()
            cars[0] = 'Toyota'
            cars[1] = 'honda'
    - var cars = new Array('Toyota','honda')
        cars.push('ford') // เพิ่มข้อมูลใน Array
        cars.sort() //เรียงข้อมูลน้อยไปมาก
        cars.revert() // ดรียงข้อมูลมากไปน้อย
    - unshift เพิ่มข้อมูลเป็นตัวแรกของอาเรย์
    - shift ลบข้อมูลตัวแรกของอาเรย์
    - push เพิ่มข้อมูลต่อจากจำหน่งสุดท้ายของอาเรย์
    - pop ลบข้อมูลตำแหน่งสุดท้ายของอาเรย์
    - splice(ตำแหน่ง,จำนวนตัวที่จะลบ,ข้อมูลที่จะใส่เพิ่ม) splice ทำได้ทั้งลบข้อมูลและเพิ่มข้อมูลในตำแหน่งที่ต้องการ
    - map แปลงข้อมูลจากอาเรย์ให้เป็นข้อมูลอื่นตามเงื่อนไข เช่น เก็บผลการสอบผ่านกับสอบตกจากคะแนนสอบของนักเรียน
    - fillter เลือกข้อมูลที่ตรงตามเงื่อนไ
    - reduce เอาทุกอย่างมายำรวมกันแล้วเป็นโกโก้ครันซ์ (พูดไม่ออก บอกไม่ถูก โปเตโต้มากๆ(ไม่รู้จะอธิบายยังไง https://www.youtube.com/watch?v=5lMgJx8WPic))
    - find ค้นหาตำแหน่งที่ตรงตามเงื่อนไข หาเจอ 1 ตัวแล้วจะหยุดการทำงาน
    - findIndex ค้นหาตำแหน่งที่ตรงตามเงื่อนไข หาเจอ 1 ตัวแล้วจะหยุดการทำงาน
    - every ตรวจสอบว่าข้อมูลทุกตัวตรงตามเงื่อนไขที่กำหนดหรือไม่ ถ้าใช่จะรีเทิร์น true
    - some ตรวจสอบว่ามีข้อมูลอย่างน้อย 1 ตัวตรงตามเงื่อนไขหรือไม่ ถ้ามีจะรีเทิร์น true

Loop
    - for ลูปตามจำนวนเงื่อนไขที่กำหนด
    - while ลูปเมื่อเงื่อนไขเป็นจริง
    - forEach ลูป value ของ Array object
        cars.forEach(function(){
            //ดูในอาเรย์ 
        })