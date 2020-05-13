package com.sonata.Model;

public class Login {
	
	private String cname;	
	private String cpassword;
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	@Override
	public String toString() {
		return "Register [cname=" + cname + ", cpassword=" + cpassword + "]";
	}
	

}
