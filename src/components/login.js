const Login = () => {
    return (
   <>
    <div class="container">
      <div class="row" >
        <div class="col-md-2"></div>
        <div class="col-md-8">
        <div class="col">
          <div class="card bg-warning" Style = {{ backgroundImage:'url("img.webp")',
   }}>
           
            <div class="card-body">
                <h1>LOGIN PAGE</h1>
              <form>
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" placeholder="Enter your Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text"></div>
                </div>
                
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" placeholder="Enter password" class="form-control" id="exampleInputPassword1"/>
                </div>
                
                  <div class="mb-3">
                 <a href="/register">Not a user?</a>
                    
                  </div>
                <button type="submit" class="btn btn-success"> <a href="login"><h6 style={{ color: `white` 
    }}>Login  </h6></a></button>
              </form>
            </div>
          </div>
        </div>
    </div>
    <div class="col-md-2"></div>
      </div>
 </div>
   </>
    );
  }
  
  export default Login;