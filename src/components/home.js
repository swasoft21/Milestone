const Home = () => {
  return ( 
      <> 
      <body>
      
  <nav class="navbar navbar-expand-lg  bg-warning">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> <img src="https://images-platform.99static.com//GqiNYfr25HeRZ-I7ivnrKIe3DGg=/176x145:735x704/fit-in/500x500/99designs-contests-attachments/116/116714/attachment_116714964" height="50" class="d-block w-100" alt="..."></img></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./menu">course</a>
            </li>
           
            
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="search" aria-label="Search"></input>
            <button class="btn btn-outline-success" ><a href="/login">login</a></button>
          </form>
        </div>
      </div>
    </nav>
    <br></br>

     <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://thumbs.dreamstime.com/b/digital-library-online-education-concept-laptop-computer-colorful-books-d-rendering-technology-background-180214804.jpg" height="600" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_703601939.jpg" height="600" class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyeIgGfH69RsiXVRPwlRNEf0wkZ5P4CV5-RqC1QxNWLPyXBt-Ysgu2_gwqxPFJruFNzLs&usqp=CAU" height="600" class="d-block w-100" alt="..."></img>
            </div>
          </div>
        </div>

    <br></br>

    <div class="container">
     



      <div class="row">
          <div class=" col-md-6 col-lg-6 col-sm-12">
              <div class="card" >
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230506112814/C-Programming-Language.png" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">C Programming</h5>
                    
                    <a href="#" class="btn btn-primary">Book </a>
                  </div>
                </div>
          </div>
          <div class=" col-md-6 col-lg-6 col-sm-12">
              <div class="card  p-3 mb-2" >
                  <img src="https://yourstelecast.com/wp-content/uploads/2021/09/where-to-get-c-programming-help-at-a-reasonable-price.png" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">C++ Programming</h5>
                    
                    <a href="#" class="btn btn-primary">order now</a>
                  </div>
                </div>
          </div>
          <div class=" col-md-6 col-lg-6 col-sm-12">
              <div class="card  p-3 mb-2" >
                  <img src="https://contentstatic.techgig.com/photo/93000110/What-makes-Java-still-popular-among-developers.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">C++ Programming</h5>
                    
                    <a href="#" class="btn btn-primary">order now</a>
                  </div>
                </div>
          </div>
          
          <div class=" col-md-6 col-lg-6 col-sm-12">
              <div class="card  p-3 mb-2" >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6U7nV67sHW_NCO_KMWtJHm198TX2IEURFwSjiIqze1Q&s" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Python Programming</h5>
                    
                    <a href="#" class="btn btn-primary">Book now</a>
                  </div>
                </div>
          </div>
      </div>
      
    </div>
   
  

    </body>
      </>
  );
}

export default Home;