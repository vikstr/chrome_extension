var bod = document.getElementsByTagName('body')[0];
bod.insertAdjacentHTML('afterbegin', `
    <div style = "position:fixed;
				  display:inline;
				  width:480px;
				  height:104px;
				  top:45%;
				  left:35%;
				  right:50%;
				  background-color:rgba(14, 14, 14, 0.4);
				  border:0.75px solid #FFFFFF;
				  border-radius:30px;
				  z-index:1;
				  cursor:pointer;">
		<div style="position:absolute;
			top:30%;
			left:30%;
			font-family: Roboto;
			font-style: normal;
			font-weight: normal;
			font-size: 24px;
			line-height: normal;
			color:white;
			transform:translate(-50%,-50%);
			-ms-transform:translate(-50%,-50%);">Введите сообщение...
		</div>
		<img src = "https://pp.userapi.com/c846323/v846323645/1c625b/o_Zd0-zz3u8.jpg" style = "position: absolute;
			widht: 24px;
			height: 24px;
			left: 89.63%;
			right: 38%;
			top: 15.34%;
			bottom: 50.16%;
			mix-blend-mode: multiply;
			background-color: rgba(255, 255, 255, 0.78);"> 
	</div>
    `);