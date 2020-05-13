package com.sonata.Model;

public class Address {
	private int aid;
	private String state;
	private String district;
	private String locality;
	private int pincode;
	
	
	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Address(int aid, String state, String district, String locality, int pincode) {
		super();
		this.aid = aid;
		this.state = state;
		this.district = district;
		this.locality = locality;
		this.pincode = pincode;
	}
	public int getAid() {
		return aid;
	}
	public int setAid(int aid) {
		return this.aid = aid;
	}
	public String getState() {
		return state;
	}
	public String setState(String state) {
		return this.state = state;
	}
	public String getDistrict() {
		return district;
	}
	public String setDistrict(String district) {
		return this.district = district;
	}
	public String getLocality() {
		return locality;
	}
	public String setLocality(String locality) {
		return this.locality = locality;
	}
	public int getPincode() {
		return pincode;
	}
	public int setPincode(int pincode) {
		return this.pincode = pincode;
	}
	@Override
	public String toString() {
		return "Address [aid=" + aid + ", state=" + state + ", district=" + district + ", locality=" + locality
				+ ", pincode=" + pincode + "]";
	}
	
	

}
