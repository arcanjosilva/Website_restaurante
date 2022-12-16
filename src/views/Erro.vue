<template>
  <h1>403</h1>
  <div>
    <p>> <span>ERROR CODE</span>: "<i>HTTP 403 Forbidden</i>"</p>
    <p>
      > <span>ERROR DESCRIPTION</span>: "<i
        >Access Denied. You Do Not Have The Permission To Access This Page On
        This Server</i
      >"
    </p>
    <p>
      > <span>ERROR POSSIBLY CAUSED BY</span>: [<b
        >execute access forbidden, read access forbidden, write access
        forbidden, ssl required, ssl 128 required, ip address rejected, client
        certificate required, site access denied, too many users, invalid
        configuration, password change, mapper denied access, client certificate
        revoked, directory listing denied, client access licenses exceeded,
        client certificate is untrusted or invalid, client certificate has
        expired or is not yet valid, passport logon failed, source access
        denied, infinite depth is denied, too many requests from the same client
        ip</b
      >...]
    </p>
    <p>
      >
      <span
        >SOME PAGES ON THIS SERVER THAT YOU DO HAVE PERMISSION TO ACCESS</span
      >: [<a href="/">Home Page</a>, <a href="/">About Us</a>,
      <a href="/">Contact Us</a>, <a href="/">Blog</a>...]
    </p>
    <p>> <span>HAVE A NICE DAY SIR AXLEROD :-)</span></p>
  </div>


</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono|Montserrat:700");


h1{
  font-size: 120pt;
  text-align: center;
  color:rgb(0, 0, 0);
  padding-top: 6%;
  
}

P {
  font-family: "Share Tech Mono", monospace;
  color: #f5f5f5;
  margin: 0 0 20px;
  font-size: 17px;
  line-height: 1.2;
}

span {
  color: #f0c674;
}

i {
  color: #8abeb7;
}

div a {
  text-decoration: none;
}

b {
  color: #81a2be;
}

a.avatar {
  position: fixed;
  bottom: 15px;
  right: -100px;
  animation: slide 0.5s 4.5s forwards;
  display: block;
  z-index: 4;
}

a.avatar img {
  border-radius: 100%;
  width: 44px;
  border: 2px solid white;
}

@keyframes slide {
  from {
    right: -100px;
    transform: rotate(360deg);
    opacity: 0;
  }
  to {
    right: 15px;
    transform: rotate(0deg);
    opacity: 1;
  }
}
</style>