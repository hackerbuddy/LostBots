         
console.log("hey rooms.js is loading");
    
        var O = OPEN = 0;
		var W = WALL = 1;
		var F = FOOD = 2;
   		var B = FBOX = 3;
		var H = HEISENBERG = 4;
		var G = VILLAGERGIRL = 5;
		var M = VILLAGERGUY = 6;
		var S = SUPERPISSEDOFFVILLAGERGUY = 7;
           //food pile variables
        var P = PILEOFFOOD=        8;
        var TLP=TOPLEFTFOOD=       9;
        var TRP=TOPRIGHTFOOD=     10;
        var BLP=BOTTOMLEFTFOOD=   11;
        var BRP=BOTTOMRIGHTFOOD=  12;
        var CTP=CENTERTILEFOOD=   13;
        var TCP=TOPCENTERFOOD =   14;
        var BCP=BOTTOMCENTERFOOD= 15;
        var RSP=RIGHTSIDEFOOD =   16;
        var LSP=LEFTSIDEFOOD  =   17;

                     // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
	     var maze1 =[[ W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W], //0
	    	         [ W, F, O, O, O, O, O, O, O, O, O, O, O, O, O, O, F, F, F, W],// 1
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, F, W, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W]
	                ];
             // 0    1   2   3   4   5   6   7   8   9  10   1 2 3 4 5 6 7 8 19
  var maze2 =[[ W,   W,  W,  W,  W,  W,  W,  W,  W,  O,  W,  W,W,W,W,W,W,W,W,W], //0
    	      [ W,   F,  O,  O,  O,  O,  O,  O,  O,  O,  O,  O,O,O,O,O,F,F,F,W],// 1
              [ W,   O,  O,  O,  O,  O,  O,  O,  O,  W,  O,  O,O,O,O,O,F,F,F,W],
	          [ W,   O,  O,  O,  O,  O,  O,  O,  O,  W,  O,  O,O,O,O,O,F,F,W,W],
              [ W,   O,  O,  O,  O,  O,  O,  O,  O,  W,  O,  O,O,O,O,O,O,O,O,W],
              [ W,   O,  O,  O,  O,  O,  O,  O,  O,  W,  O,  O,O,O,O,O,O,O,O,W],
              [ W,   O,  O,  O,  O,  O,  O,  O,  O,  W,  O,  O,O,O,O,O,O,O,O,W],
              [ W,   O,  O,  O,  O,  O,  O,  O,  O,  W,  O,  O,O,O,O,O,O,O,O,W],
              [ W,   O,  O,  O,  O,  W,  W,  W,  W,  W,  O,  O,O,O,O,O,O,O,O,W],
              [ O,   O,  O,  O,  O,  O,  O,  O,  O,  W,  O,  O,O,O,O,O,O,O,O,W],
              [ W,   O,  O,  O,  O,  O,  O,  O,  O,  W,  W,  O,O,O,O,O,O,O,O,W],
              [ W,   O,  O,  O,  O,  O,  O,  O,  O,  O,  O,  W,O,O,O,O,O,O,O,W],
              [ W,   W,  W,  W,  W,  W,  O,  W,  W,  W,  W,  W,W,W,W,W,W,W,W,W],
              [ W, TLP,TCP,TCP,TCP,TCP,  P,TCP,TCP,TCP,TCP,TRP,W,O,O,O,O,O,O,W],
              [ W, LSP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,RSP,W,O,O,O,O,O,O,W],
              [ W, LSP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,RSP,W,O,O,O,O,O,O,W],
              [ W, LSP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,RSP,W,O,O,O,O,O,O,W],
              [ W, LSP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,CTP,RSP,W,O,O,O,O,O,O,W],
              [ W, BLP,BCP,BCP,BCP,BCP,BCP,BCP,BCP,BCP,BCP,RSP,W,O,O,O,O,O,O,W],
              [ W,   W,  W,  W,  W,  W,  W,  W,  W,  W,  W,  W,W,W,W,W,W,W,W,W]];

                    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
	     var maze3 = [[W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W],//0
	    	         [ W, F, O, O, O, O, O, O, O, O, O, O, O, O, O, O, F, F, F, W],//1
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, F, F, W],//2
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, W, F, W],//3
	    	         [ W, O, O, O, O, O, O, F, O, W, O, O, O, O, O, O, O, O, O, W],//4
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],//5
	    	         [ W, O, O, O, O, O, F, O, O, W, O, O, O, O, O, O, O, O, O, W],//6
                     [ W, O, O, O, O, O, O, O, O, W, O, O, O, F, O, O, O, O, O, W],//7
                     [ W, O, O, O, O, W, W, W, W, W, O, O, O, O, O, O, O, O, O, W],//8
                     [ O, O, O, O, O, O, O, O, O, W, O, F, O, O, O, O, O, O, O, O],//9
                     [ W, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, W, W, W, W, W, O, W, W, O, W, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W]
	                ];

                     // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
	     var maze4 =[[ W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W], //0
	    	         [ W, F, O, O, O, O, O, O, O, O, O, O, O, O, O, O, F, F, F, W],// 1
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W, F, F, W],
	    	         [ W, O, O, O, O, O, O, F, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, F, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, F, O, W, O, O, O, F, O, O, O, O, O, W],
                     [ W, O, O, O, O, W, W, W, W, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, O, F, O, O, O, O, O, O, O, O],//9
                     [ W, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, O, W, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, F, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W]
	                ];
                    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
	     var maze5 =[[ W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W], //0
	    	         [ W, F, O, O, O, O, O, O, O, O, O, O, O, O, O, O, F, F, F, W],// 1
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W, F, F, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, F, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, F, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, F, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, O, O, O, F, O, O, O, O, O, W],
                     [ W, O, O, O, O, W, W, W, W, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, O, F, O, O, O, O, O, O, O, O],//9
                     [ W, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, O, W, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, F, W, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W]
	                ];

                     // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
	     var maze6 =[[ W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W], //0
	    	         [ W, F, O, O, O, O, O, O, O, O, O, O, O, O, O, O, W, F, F, W],// 1
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, F, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, F, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, F, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, O, O, O, F, O, O, O, O, O, W],
                     [ W, O, O, O, O, W, W, W, W, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, O, F, O, O, O, O, O, O, O, O],
                     [ W, O, O, F, O, O, O, O, O, W, W, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W, W, O, W, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W]
	                ];
        
                     // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
	     var maze7 =[[ W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W], //0
	    	         [ W, F, O, O, O, O, O, O, O, O, O, O, O, O, O, O, F, W, F, W],// 1
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, F, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, F, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, F, F, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, O, O, O, F, O, O, O, O, O, W],
                     [ W, O, O, O, W, W, W, W, W, W, O, O, O, O, O, O, O, O, O, W],
                     [ O, O, O, O, O, O, O, O, O, W, O, F, O, O, O, O, O, O, O, O],
                     [ W, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, O, W, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W]
	                ];
                     // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
	     var maze8 =[[ W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W], //0
	    	         [ W, F, O, O, O, O, O, O, O, O, O, O, O, O, O, O, F, F, W, W],// 1
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, F, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, F, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, F, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, F, O, O, W, O, O, O, F, O, O, O, O, O, W],
                     [ W, O, O, O, O, W, W, W, W, W, O, O, O, O, O, O, O, O, O, W],
                     [ O, O, O, O, O, O, O, O, O, W, O, F, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W, O, W, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, O, W, W, W, W, W, W, W, W, W, W]
	                ];
                     // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
	     var maze9 =[[ W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W], //0
	    	         [ W, F, O, O, O, O, O, O, O, O, O, O, O, O, O, O, F, F, F, W],// 1
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, O, O, W, O, O, O, O, F, F, F, F, F, W],
	    	         [ W, O, O, O, O, O, O, F, O, W, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, O, O, O, F, O, O, O, O, O, O, O, O, O, W],
	    	         [ W, O, O, O, O, O, F, O, O, W, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, F, O, O, W, O, O, O, F, O, O, O, O, O, W],
                     [ W, O, O, O, O, W, W, W, W, W, O, O, O, O, O, O, O, O, O, W],
                     [ O, O, O, O, O, O, O, O, O, W, O, F, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, O, W],
                     [ W, W, W, O, W, W, O, W, W, W, W, W, W, W, W, W, W, O, W, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, W, W, O, O, O, O, O, O, O, W],
                     [ W, O, O, O, O, O, O, O, O, O, O, O, W, O, O, O, O, O, O, W],
                     [ W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W, W]
	                ];
        
        
        
