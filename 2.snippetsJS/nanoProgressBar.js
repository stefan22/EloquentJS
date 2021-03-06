<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Testing Nanobar.js</title>
		

	<style>
		body {
			border: 5px solid rgba(236, 126, 126, 0.6);
		    height: 100%;
		    /* width: 100%; */
		    background-color: #e6e6e6;
		    min-height: 700px;
		    margin: 0;
		    padding: 0;
		}

		h1 {text-align: center;}

		.gap {
			width: 100%;
		    height: 150px;
		    background-color: #00544d;
		    margin: 1em 0 3em;
		    line-height: 150px;
		    font-size: 24px;
		    text-align: center;
		    color: rgba(255, 255, 255, 0.75);

		}

		ul {
			display: inline-block;
    		vertical-align: middle;
		}

		li {
			    line-height: 20px;
			    font-size: 14px;
			    text-align: left;
			    vertical-align: text-bottom;
			    vertical-align: middle;
		}

		.mainContainer {
			margin: 0 2em;
		}

		section#centered {
			margin-bottom: 2em;
		}

		
	</style>

	</head>
<body>

	<h1>My Nanobar Snippets</h1>
		
	<div class="mainContainer">
			
		<h3>1) Top progress bar</h3>	
		<div class="general-buttons">
			<button class="doc_go" onClick="nanobar.go(30)">nanobar.go(30)</button>
			<button class="doc_go" onClick="nanobar.go(60)">nanobar.go(60)</button>
			<button class="doc_go" onClick="nanobar.go(100)">nanobar.go(100)</button>
		</div>  <!--  end of div general-buttons   -->  	

		<div class="gap">
			just a Gap for presentation purposes
			<ul>
				<li>pink is body border 5px</li>
				<li>progress bar is sitting at default</li>
				<li><u>None of the inline-css has nothing to do with 
				the progress bar itself</u></li>
			</ul>
		</div>

      	<h3>2) Customize nanobar with CSS (colorbar)</h3>
      	<section id="color">
        	<button class="doc_go" onClick="colorbar.go(30)">bar.go(30)</button>
        	<button class="doc_go" onClick="colorbar.go(60)">bar.go(60)</button>
        	<button class="doc_go" onClick="colorbar.go(100)">bar.go(100)</button>
      	</section>
  
		<div class="gap">
			just a Gap for presentation purposes
			<ul>
				<li>pink is body border 5px</li>
				<li>progress bar is sitting at default</li>
				<li><u>None of the inline-css has nothing to do with 
				the progress bar itself</u></li>
			</ul>
		</div>


		<h3>3) Customize nanobar with CSS (centerbar)</h3>
      	<section id="centered">
        	<button class="doc_go" onClick="centeredbar.go(30)">bar.go(30)</button>
        	<button class="doc_go" onClick="centeredbar.go(60)">bar.go(60)</button>
        	<button class="doc_go" onClick="centeredbar.go(100)">bar.go(100)</button>
      	</section>	

      	<p>For reference. Eventhough none of the CSS has nothing to do with
      	progress bar, there are other things you can do with this progress bar
      	using CSS, like something similar to Google new buttons for example</p>
      	<p>Installation with bower install nanobar</p>
      	<p>http://nanobar.jacoborus.codes/</p>


</div>  <!--  end of div mainContainer   -->  				
			
<script src="bower_components/nanobar/nanobar.min.js"></script>
<script>
	var nanobar = new Nanobar();
	nanobar.go(90);
	
	var colorbar = new Nanobar({
		target: document.getElementById('color')
	});
	colorbar.go(20);

	var centeredbar = new Nanobar({
		target: document.getElementById('centered')
	});
	centeredbar.go(10);

</script>
    
</body>
</html>
