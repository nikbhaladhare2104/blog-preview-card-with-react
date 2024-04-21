function App() {

  //  <style>
  //     .attribution {
  //       font-size: 11px;
  //       text-align: center;
  //     }
  //     .attribution a {
  //       color: hsl(228, 45%, 44%);
  //     }
  //   </style>
  return (
    <div className="App">
      <div className="card">
        <div className="card-content">
          <img src="/images/illustration-article.svg" alt="blog-image" className="blog-image" />
          <button className="btn"> Learning </button>
          <p className="card-date">Published 21 Dec 2023</p> 
          <p className="card-title">HTML & CSS foundations </p>
          <p className="card-desc">These languages are
            the backbone of every website, defining structure, content, and
            presentation. 
          </p>
          <div className="card-author">
            <img src="/images/profile_pic.png" alt="profile-pic" width={32} />
            <p> Nikhil Bhaladhare</p>
          </div>
     
         

        </div>
        
      </div>
    </div>
  )
}

export default App
