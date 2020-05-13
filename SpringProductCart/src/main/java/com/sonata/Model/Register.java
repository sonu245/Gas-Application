package com.sonata.Model;

import org.springframework.beans.factory.annotation.Autowired;

public class Register {
	private int cid;
	private String cname;
	private int aadhar;
	private String cemail;
	private int cphone;
	private String cpassword;
	private String gasCategory;
	
	//@Autowired
	private Address address;

	
	
	
	
	public Register() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Register(int cid, String cname, int aadhar, String cemail, int cphone, String cpassword, String gasCategory,
			Address address) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.aadhar = aadhar;
		this.cemail = cemail;
		this.cphone = cphone;
		this.cpassword = cpassword;
		this.gasCategory = gasCategory;
		this.address = address;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public int getAadhar() {
		return aadhar;
	}
	public void setAadhar(int aadhar) {
		this.aadhar = aadhar;
	}
	public String getCemail() {
		return cemail;
	}
	public void setCemail(String cemail) {
		this.cemail = cemail;
	}
	public int getCphone() {
		return cphone;
	}
	public void setCphone(int cphone) {
		this.cphone = cphone;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	public String getGasCategory() {
		return gasCategory;
	}
	public void setGasCategory(String gasCategory) {
		this.gasCategory = gasCategory;
	}
	public Address getAddress() {
		return address;
	}
	
	
	public void setAddress(Address address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Register [cid=" + cid + ", cname=" + cname + ", aadhar=" + aadhar + ", cemail=" + cemail + ", cphone="
				+ cphone + ", cpassword=" + cpassword + ", gasCategory=" + gasCategory + ", address=" + address + "]";
	}
	
	
	
	

}
