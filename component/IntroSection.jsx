import React from 'react';

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

function IntroSection() {
  const articleStyles = {
    container: "article",
    title: "article-title",
    body: "article-body",
    link: "article-link"
  };

  return (
    <div className={articleStyles.container}>
      <h3 className={articleStyles.title}>TechUp Thailand</h3>
      <p className={articleStyles.body}>
        เตรียมพบกับหลักสูตรปั้นคุณเป็น Software Developer ภายใน 4 เดือน
      </p>
      <a 
        href="https://www.techupth.com/" 
        target="_blank" 
        rel="noreferrer" 
        className={articleStyles.link}
      >
        techupth.com
      </a>
      <div className="bootcamp-start-time">วันเวลาเริ่มหลักสูตร คือ </div>
      <p>{getCurrentDateTime()}</p>
    </div>
  );
}

export default IntroSection;