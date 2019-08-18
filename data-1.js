$(document).ready(function(){
    
	// Define variables that reference our script tags within the body of our page
	var topNavigation = $("#topNavigation").html();
    var sideNavigation = $("#sideNavigation").html();
    
	// Have MustacheJS render our script tags
	Mustache.parse(topNavigation);
	Mustache.parse(sideNavigation);
	
	// Define our data objects
	var topNav = Mustache.render(topNavigation, {
        item:
		[
			{
                name: "About",
                link: "about.html"
            },
            {
                name: "Sign-Up",
                link: "signup.html"
            },
            {
                name: "Classes",
                link: "classes.html"
            },
            {
                name: "Business Owners",
                link: "business.html"
            },
            {
                name: "Contact",
                link: "contact.html"
            },
		]
    });
	
	var sideNav = Mustache.render(sideNavigation, {
        item:
		[
			{
                name: "Our Team",
				image:"./images/sun.png",
				altTag:"Sun Image"
            },
            {
                name: "Jared",               
				image:"./images/jared.png",
				altTag:"JaredPic"
            },
            {
                name: "Tiffany",                
				image:"./images/Tiff.png",
				altTag:"TiffPic"
            },
			 {
                name: "Blue",                
				image:"./images/puppy.png",
				altTag:"Dog Pic"
            }
		]
    });
    
    $(".submit-btn").click(function(){
        alert("At this time, this button's functionality is disabled.")
    })
	// Place data into the HTML of our page with the html() jQuery method
	$("#render_topLinks").html(topNav);
	$("#render_sideLinks").html(sideNav);
	
	// Insert current year into the Copyright text in the footer.  Note: MustacheJS is not needed to do this.
	$("#currentYear").html(new Date().getFullYear());
	
});