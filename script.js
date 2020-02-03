var image;
function toDrawCard (animal){
	
	switch(animal){
		case 'baboon': image='https://upload.wikimedia.org/wikipedia/commons/9/96/Portrait_Of_A_Baboon.jpg'; break;
		case 'bison':  image='https://upload.wikimedia.org/wikipedia/commons/8/8d/American_bison_k5680-1.jpg'; break;
		case 'camel':  image='https://upload.wikimedia.org/wikipedia/commons/8/82/2011_Trampeltier_1528.JPG'; break;
		case 'chameleon':  image='https://animals.sandiegozoo.org/sites/default/files/2017-12/chameleon-veiled.jpg'; break;
		case 'deer':  image='https://www.washingtonpost.com/resizer/tEkgRlRqBmUtz2hSKbKZBpX9TdU=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/JQ3WFUTBDYI6TPZE3NFZ7NRKUI.jpg'; break;
		case 'dolphin':  image='https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/f_auto,q_auto,w_1100/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg'; break;
		case 'duck':  image='https://upload.wikimedia.org/wikipedia/commons/1/19/Hausente.jpg'; break;
		case 'elephant':  image='https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg'; break;
		case 'flamingo':  image='https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'; break;
		case 'giraffe':  image='https://a-z-animals.com/media/animals/images/470x370/giraffe_10.jpg'; break;
		case 'hendeghog':  image='https://www.thesprucepets.com/thmb/yLAAAtxUYcgjaJHFjFEXCohq0yE=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-626916125-5b3a4a8046e0fb00379f682d.jpg'; break;
		case 'hippopotamus':  image='https://www.theanimalspot.com/wp-content/uploads/2019/01/hipposmall.jpg'; break;
		case 'horse':  image='https://www.napha.net/wp-content/uploads/2018/03/abaco-no-fence-1280x1110-1.jpeg'; break;
		case 'kangaroo':image='https://media.australianmuseum.net.au/media/dd/images/eastern_grey_kangaroo.8d02488.width-800.cdc7286.jpg'; break;
		case 'koala':image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Koala_climbing_tree.jpg/240px-Koala_climbing_tree.jpg'; break;
		case "lion": image='Lion_waiting_in_Namibia.jpg'; break;
		case 'llama':image='https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/02/27/931/524/694940094001_6008064783001_6008057472001-vs.jpg?ve=1&tl=1'; break;
		case 'meerkat':image='https://upload.wikimedia.org/wikipedia/commons/9/9a/Meerkat_%28Suricata_suricatta%29_Tswalu.jpg'; break;
		case 'monkey':image='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Macaca_sinica_-_01.jpg/220px-Macaca_sinica_-_01.jpg'; break;
		case 'ostrich':image='https://www.desertanimals.net/wp-content/uploads/2019/01/ostrichsmall.jpg'; break;
		case 'owl':image='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eastern_Barn_Owl_%28Tyto_javanica_stertens%29%2C_Raigad%2C_Maharashtra.jpg/220px-Eastern_Barn_Owl_%28Tyto_javanica_stertens%29%2C_Raigad%2C_Maharashtra.jpg'; break;
		case 'panda':image='https://zoo.sandiegozoo.org/sites/default/files/styles/hero_mobile_560x670/public/2019-01/hero-short-pandacam_0.jpg?itok=Qdw5BiFz'; break;
		case 'penguin':image='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/1000x-1.jpg'; break;
		case 'porcupine':image='https://animals.net/wp-content/uploads/2018/09/Porcupine-1-650x425.jpg'; break;
		case 'rabbit':image='https://www.humanesociety.org/sites/default/files/styles/360_max_width/public/2018/08/rabbit-433737.jpg?itok=BPSWMwHZ'; break;
		case 'racoon':image='https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'; break;
		case 'sheep':image='https://www.forfarmers.co.uk/bestanden/UK_countrywebsite/Sector-images/Sheep/Themes/w528-37778-1/UK-sheep-lambs-theme-block.jpg'; break;
		case 'snake':image='https://thumbs-prod.si-cdn.com/rjR9dBkPzbx3tV22Yhi-aA4aCRw=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/a3/3f/a33f8ee0-bfee-4cce-9a13-f9388c5323c0/42-55375529.jpg'; break;
		case 'squid':image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Loligo_vulgaris.jpg/220px-Loligo_vulgaris.jpg'; break;
		case 'squirrel':image='https://pixel.nymag.com/imgs/fashion/daily/2019/03/15/15-squirrel.w700.h700.jpg'; break;
		case 'toucan':image='https://download.ams.birds.cornell.edu/api/v1/asset/96276931/900'; break;
		case 'turtle':image='https://upload.wikimedia.org/wikipedia/commons/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg'; break;
		case 'walrus':image='https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/content_grid/public/thumbnails/image/lone_walrus_with_tag_on_ice_Ty_Donnelly_7-14-2015.jpg?itok=0h7o_DgR'; break;
	}
var card =document.getElementById('card');
card.innerHTML="<img src='"+ image +"'/>";
}