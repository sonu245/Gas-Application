package com.sonata.Model;
	import javax.persistence.Column;
	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
	import javax.persistence.Table;

	@Entity
	@Table(name = "productList")

	public class ProductList {
		
		@Id
		@Column(name = "pid")
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long pid;
		
		@Column(name = "p_name", columnDefinition = "varChar(100)")
		private String pname;
		
		@Column(name = "p_price", columnDefinition = "varChar(50)")
		private String pprice;

		public Long getPid() {
			return pid;
		}

		public void setPid(Long pid) {
			this.pid = pid;
		}

		public String getPname() {
			return pname;
		}

		public void setPname(String pname) {
			this.pname = pname;
		}

		public String getPprice() {
			return pprice;
		}

		public void setPprice(String pprice) {
			this.pprice = pprice;
		}
		

	}

