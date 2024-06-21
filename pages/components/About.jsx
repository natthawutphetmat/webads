import Image from 'next/image';
import React from 'react'


export default function About() {
  return (
    <div className=''>
    

      <h1>เกี่ยวกับเรา</h1>

      <section>
  <h2>ภารกิจของเรา</h2>
  <p>เรามุ่งมั่นที่จะนำเสนอโซลูชันการโฆษณาที่เป็นนวัตกรรมและมีประสิทธิภาพเพื่อช่วยให้ลูกค้าของเราขยายธุรกิจของพวกเขา</p>
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
  <img src="/img/facebook/fb (1).jpg" width="100%" className='facebook' alt="facebook ads" />
  </div>
</section>
      <div className="cut"></div>
      <section>
        <h2>ทีมงานของเรา</h2>
        <p>ทีมงานของเราประกอบด้วยนักการตลาด นักออกแบบ และนักยุทธศาสตร์ที่มีประสบการณ์ซึ่งอุทิศตนเพื่อความสำเร็จของคุณ</p>
        <img src="/img/facebook/fb (2).jpg" width="100%" className='facebook' alt="facebook ads" />
      </section>


      <div className="cut"></div>


      <section>
        <h2>บริการของเรา</h2>
        <ul>
          <li>การออกแบบโฆษณา</li>
          <li>การผลิตวิดีโอสำหรับโฆษณา</li>
          <li>การจัดการแคมเปญโฆษณา</li>
        </ul>
        <img src="/img/fb10.jpg" width="100%" className='facebook' alt="facebook ads" />
      </section>
      <div className="cut"></div>
      <section>
        <h2>งานของพวกเรา</h2>
        <p>ตรวจสอบโครงการที่ผ่านมาของเราเพื่อดูว่าเราสามารถทำอะไรได้บ้าง</p>
        <img src="/img/facebook/fb (3).jpg" width="100%" className='facebook' alt="facebook ads" />
      </section>
      <div className="cut"></div>
      <section>
        <h3>Google</h3>
      <div className="d-flex">
       <img src="/img/Google/Google (1).jpg"  width="50%" alt="" />
       <img src="/img/Google/Google (2).jpg"  width="50%" alt="" />
       </div>
      <div className="d-flex">
       <img src="/img/Google/Google (3).jpg"  width="50%" alt="" />
       <img src="/img/Google/Google (4).jpg"  width="50%" alt="" />
       </div>
      <div className="d-flex">
       <img src="/img/Google/Google (5).jpg"  width="50%" alt="" />
       <img src="/img/Google/Google (6).jpg"  width="50%" alt="" />
       </div>
      <div className="d-flex">
       <img src="/img/Google/Google (7).jpg"  width="50%" alt="" />
       <img src="/img/Google/Google (8).jpg"  width="50%" alt="" />
       </div>

      </section>
      <div className="cut"></div>
      <br />
      <div className="cut"></div>
<hr />


      <section>
        <h2>คำรับรองจากลูกค้า</h2>
        <p> พวกเขาให้ผลลัพธ์ที่โดดเด่นสำหรับแคมเปญล่าสุดของเรา  ลูกค้าที่มีความสุข  </p>


        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
    <div className="d-flex">
  <div ><img src="/img/review/review1.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review2.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review3.jpg"width="100%"   alt="review"/></div>
      </div>
      </div>
      <div className="carousel-item active" data-bs-interval="3000">
      <div className="d-flex">
  <div ><img src="/img/review/review2.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review3.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review4.jpg"width="100%"   alt="review"/></div>
      </div>

    </div>

{/* ---------------- */}
    <div className="carousel-item active" data-bs-interval="3000">
      <div className="d-flex">
  <div ><img src="/img/review/review3.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review4.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review5.jpg"width="100%"   alt="review"/></div>
      </div>
    </div>
{/* ---------------- */}

{/* ---------------- */}
    <div className="carousel-item active" data-bs-interval="3000">
      <div className="d-flex">
  <div ><img src="/img/review/review4.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review5.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review6.jpg"width="100%"   alt="review"/></div>
      </div>
    </div>
{/* ---------------- */}

{/* ---------------- */}
    <div className="carousel-item active" data-bs-interval="3000">
      <div className="d-flex">
  <div ><img src="/img/review/review5.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review6.jpg" width="100%"  alt="review"/></div>
  <div><img src="/img/review/review7.jpg"width="100%"   alt="review"/></div>
      </div>
    </div>
{/* ---------------- */}


  </div>
</div>

      </section>
      <div className="cut"></div>
      <section>
        <h2>ติดต่อเรา</h2>
        <p>อย่าลังเลที่จะติดต่อเราเพื่อหารือเกี่ยวกับความต้องการด้านการโฆษณาของคุณ!</p>
   <p>Line: คลิ๊ก  <a href="https://lin.ee/gLQY1oN"> click!</a></p>
   <p>โทรศัพท์: (096) 079-2769</p>


      </section>
      <div className="cut"></div>
    </div>
  );
}
