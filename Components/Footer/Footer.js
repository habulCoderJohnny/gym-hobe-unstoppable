import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#1C3764] text-white">
  <div>
  <div className="flex items-center gap-2 font-sporting text-xl">
    <h1 className="bg-white text-secondary rounded-lg p-1">Gym</h1><span className="text-white">baran</span>
        </div> 
    <p className="opacity-50">IRD Foundation<br/>We take care of your health with regular and fun exercise</p>
  </div> 
  <div>
    <span className="font-bold text-white">Services</span> 
    <a className="link link-hover opacity-50">Branding</a> 
    <a className="link link-hover opacity-50">Design</a> 
    <a className="link link-hover opacity-50">Marketing</a> 
    <a className="link link-hover opacity-50">Advertisement</a>
  </div> 
  <div>
    <span className="font-bold text-white">Company</span> 
    <a className="link link-hover opacity-50">About us</a> 
    <a className="link link-hover opacity-50">Contact</a> 
    <a className="link link-hover opacity-50">Jobs</a> 
    <a className="link link-hover opacity-50">Press kit</a>
  </div> 
  <div>
    <span className="font-bold text-white">Legal</span> 
    <a className="link link-hover opacity-50">Terms of use</a> 
    <a className="link link-hover opacity-50">Privacy policy</a> 
    <a className="link link-hover opacity-50">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;