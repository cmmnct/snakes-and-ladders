(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1127,0,104,388],[1127,390,59,59],[0,0,1125,780]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vlak = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339999").s().p("Ak/FAIAAp/IJ/AAIAAJ/g");
	this.shape.setTransform(0,0,1.5625,1.5625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vlak, new cjs.Rectangle(-50,-50,100,100), null);


(lib.tip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_2
	this.tekstvak = new cjs.Text("placeholder tekst.", "21px 'Open Sans'", "#FFFFFF");
	this.tekstvak.name = "tekstvak";
	this.tekstvak.textAlign = "center";
	this.tekstvak.lineHeight = 31;
	this.tekstvak.lineWidth = 322;
	this.tekstvak.parent = this;
	this.tekstvak.setTransform(176.2,50.8);

	this.timeline.addTween(cjs.Tween.get(this.tekstvak).wait(1));

	// Laag_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF006E").s().p("A29ZeQkuAAAAkuMAAAgpfQAAkuEuAAMAt6AAAQCTAABQBcQBKBXABCbIABAAMAAAAo+IgBABQAAEukuAAg");
	this.shape.setTransform(177.2,163);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tip, new cjs.Rectangle(0,0,354.4,326), null);


(lib.ladder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ladder, new cjs.Rectangle(0,0,52,194), null);


(lib.fiche = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2276").s().p("Ak+E+QiDiDAAi7QAAi6CDiEQCEiDC6AAQC7AACDCDQCECEAAC6QAAC7iECDQiDCEi7AAQi6AAiEiEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fiche, new cjs.Rectangle(-45,-45,90,90), null);


(lib.dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0A1QgWgVAAggQAAgeAWgWQAWgWAeAAQAgAAAVAWQAWAWAAAeQAAAggWAVQgVAWggAAQgeAAgWgWg");
	this.shape.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dot, new cjs.Rectangle(0,0,15,15), null);


(lib.closeBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-14.75,-14.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-14.7,29.5,29.5);


(lib.blok = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC99").ss(1,1,1).p("Ai/ldIF/AAQCeAAAACeIAAF/QAACeieAAIl/AAQidAAAAieIAAl/QAAieCdAAg");
	this.shape.setTransform(34.55,35.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAF7E7").s().p("Ai/FdQidAAAAidIAAl/QAAieCdABIF/AAQCegBgBCeIAAF/QABCdieAAg");
	this.shape_1.setTransform(34.55,35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blok, new cjs.Rectangle(-1.4,-0.7,71.9,71.9), null);


(lib.snakeR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003600").s().p("AlPCMIAQhRIARgzQAiggAyAgIA+ATICcAxQAMgEAKgJQAdgYAAhAIAFAOQAJAcgBAWQgCAjgcATIgRAQQghARhUghIiHgRQghAAhDBCIgBABgAC5AqIhUhkIgEgEQgdgeAQAAIBUBUIARAQQAUAPAOACQAYADAHgiQADgOAAgVQAAhEAyghIACACIAgAwQgRABgRAhIgRBCIgyBEg");
	this.shape.setTransform(159.425,-249.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#101A06").s().p("AhCCTQiphlh2B2IABgiQBDhDAhAAICHARQBUAhAhgQIARgRQAcgTACgjIADAUQAiAzgiAyQgIAagdAAQgdAAgygagACHAuIg2h4IADADIBUBkIAzAiIAyhCIARhEQARghARAAIgggxQAUgTAdAAQAIAFAEAKIAFAbQAAAigRA7IgRgiQgRgRAAAiIg2CGIgNAiQgFAHgFADQgGAFgHAAQgfAAgvhTgAj8gUIBPAjIg+gSQgygigiAiIgRAxIgQBRQAIjBBcAugAARAdQARgQAAhDIAFAeIgFgNQAAA/gdAZQAHgJAFgNgADKAMQASgIANgWQgGAfgVAAIgEgBgACogDIgRgRIAzAgQgOgBgUgOg");
	this.shape_1.setTransform(161.1125,-248.2375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A4C10").s().p("Aw9CSIAbgLQBlgzEwAAIE/AAIKQBlIAiACILUh4IACgBIADgCIACgBIACgCQDKiSABjIIgYiOIgDgKIgfg/IgTgmQBlCHgRCoQgRCYhlB1Qh2CHiHAQQjKAzghAyQgzAiD9gyQC5gzCoiHQCHiFARh2IAAiHQAWBogRBdIgBAHQgXByhRBlIgBABQixDBkrAnIgdAEQkfAhmUh1Qo7iHkvAAIgyAIIj4BGIgPAIIgIAFIgBAAIgBAAIgDACIgDADIgCABIgGAEQhVAyhDBVIgCAEIgKASIiLCSg");
	this.shape_2.setTransform(-155.658,221.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A58A16").s().p("EgOhAhcQAhgzDKgyQCHgRB2iHQBlh2ARiXQARiphliGIATAmIgSgbQhNhviuiXIgDgCIApAYIChBeIAAAQIADACIADABIDdEUIAJAZQAjB8gdB8QAQhegWhnIAACGQgRB2iHCHQioCHi5AyQiXAfgrAAQgcAAAUgOgA0Uf3IqRhlIk/AAQkwAAhlAyIgbAMIAbgMQBlgzEwAAIE/AAIKRBlIAjADIgjgCgAdrScIABAAIAAAAIgCAAIAGgFIBfhPIAUgSIEipmIgmj8IgCgIIiHkNQlAlyioi5QgjgsghgsQjZkfhnj4QhijSABjbQgLhMAYhVIAIgkIEiDZIAUDlIAAADIACAIQALArANApQAwCWBQB4IAEAFQAKAPARATIA8BCQBjBrCjCNIlykNQgzgygyAQQhUBECXCXQBCBqC1C9QAxA0A6A5QD8D9BVCnQC5HHCGjbIAjiAIAQg5QBSDVgtDFIgDALIgDALIgHAeIgDAFIimEbIgwBSIheAtIgGAFIgHAGImyDKIgYAFgAHkR6IrCjKIgMgEQiXgviSgfIhggSIgFgBIkdggIgIgBIgEgBIgDAAIgJABIj8APIgFABIgBAAIAAAAIhlgyIh0h1IgCgBIABAAQAkgeBEgPIAFgCIgDACQB/gbDuAVQEFAXDAAtQBdAWBNAcIC/BYIgogVQAkAPBQApIFjCjIDsCHICGAigEATNggsIAMg9IACABIApAmQgDAGgGAFQgLAMgWAAIgNgBg");
	this.shape_3.setTransform(6.6091,35.759);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2E420C").s().p("AKMbtQj9AAnWhlIrEjKQjShDjHgiIAEAAIBhASQCRAfCYAwIALADILEDLIC4AhIiGghIjsiHIlkikQhQgpgjgOIAoAVIjAhYQhNgchdgWIgfgSIlAhUQkfhUioAAQi5AABDCoIAAAAIABACQAzBTB0BDIAyARIABAAICoBEIAiAQIgagIIhNgaIiWgyQiHgyhlhmQioioCHhUQBUgiCoAAID9AiIJeCpIKAENIAcAMQCwBJBvAqQBMAcAuAOQEvBDCYgBQIvAiEOkAQAIgFAEgHIABgBIABgBQAIgEAGgKQCqilARkCQARkNipjKQhlhmgyAiQhEBDAAB3IgyCoQAyjLiokNQgihDlinoIkypDIgNgsQhPkUAOkoQgFC9AjClQAAj9BVAAQBDARAiBlIAyD8QARCHBlC6ICoEdQBHBoBhBgQAhArAjAsQCpC5E/FyICHEOIADAIIAlD7IkiJnIgTARIhfBQIgnAFIgRAAIknBCIgIABgA3OU3IgLAAIAIAAIADAAIAFAAIAIABIgNgBgEAhVAQJIADgMIgCALIgDAMIACgLgAbBIxQhUioj9j9Qg5g6gxgzQCzB5DmBpIDfBcQB2CyAwCOIgjCAQgsBHgxAAQhmAAh9kzgAYqg9QkRjwh9h/Ig8hCQgQgTgKgOIgFgGQhliXgyjLIgCgHIgBgEIADALIAOAyICKEwIHOHBIAaAXIAFAEIgFgEgAJq6OIiHhUIgWgKIAWAKICHBUQBAAjAxAqIAAAAQgxgphAgkgAFc7hIABgBIAAAQIgBABg");
	this.shape_4.setTransform(62.2724,-16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("EgtgAkYIARhUQAAhDAzhVQBDiXBUhDQC5h2FRgiQBngHB+AFIAuADQCQAICrAZQDKARGDAyQEeAACHgiQDbghBUiYQBuiXhcitIAAgBIASAbIAfA/IADAKIAYCNQgBDJjKCTIgCABIgCACIgCABIgDACIrTB4IgjgDIqRhlIk/AAQkwAAhlAzIgbAMIlGGIICLiRIAKgSIgDAFIg+B8QgNARgNALQgXATgVAAQgZAAgXgegAimeDIgBABIAAABIABgCgAg9alQAeh8gjh8IgJgZIAJAZQAlB/ghCAIABgHgAxrYCIAEgBIANgSIADgKIABgKQAAgphDg4IgHgEQhwhGgngVIgDgCIgIgEIgCgBIgDgCIgCgCIgDgCIgCgBIgDgCIgCgCIgDgBIgCgCIgDgBIgCgCIgDgBIgCgCIgDgBIgCgCIgCgBIgDgCIgCgBIgCgCIgCgBIgDgCIgEgDIgCgBIgDgCIk4jLIgPgLIgSgNIhLg+IgGgGIgEgDQgegdgZgeIgJgIQhchtgKhuIABACIABABIBBBiQCYDKDrBlIG2EOQBUBUAAhlQAAgihDhDQBUAhAiBVQAhBUhDBDIhDAiIhlARgAnPQPIgQgRIgIgHIAWAOIChBmIACACgAxFL6Qh1hDgzhTIB1B1IBlAygAsWIwQjugVh/AbIADgCIgFACQhFAPgjAeQhEipC5AAQCpAAEeBUIFABVIAgARQjAgtkFgXgEApHgDeIjfhcQjnhqizh5Qi1i9hChqQiXiXBUhEQAygQAzAyIFyENQijiNhjhrQB9B+EQDwIAGAFQD4DYCWDZgAYeu6IiokeQhli6gRiGIgzj9QgihlhDgRQhUAAAAD9QgkilAGi9IAKiKIABgPIAHgsIAtAuICYC5IBtBSIgIAkQgYBVALBMQgBDbBiDSQBnD4DZEfQhhhfhHhogAcKxRQhQh4gwiWQgNgpgLgrIgCgIIACAIQAzDKBlCXIAEAGIgEgFgAd/5KQhDgihlhlQiYhDgQhlIAAjbIgzgzIhDgiIAyAAIBEghIgRARIAyBlIAADrQARAzCYBUIDKBlQC5BEEejLICYgQIB2AQICGgQIAzgiIghAhIgBABIgyAQIAAAAIAAAiQgRARiYAAQiXgihUAiIjsB2QhnAvhIAAQg5AAgmgegEATvgiHQiHhDhOhAIALgVIAAABIAAAQIAAgBIAhghQAGgCAHgCIAOgBIA1AMIAVAKICHBUQBAAkAyAqQgCAGgDAGIgogmIgCgBIgNA9QgsgFhNgng");
	this.shape_5.setTransform(-8.975,40.4603);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E2B08").s().p("AFtIrIBDghQBDhEghhTQgihVhUghQBDBDAAAiQAABkhUhTIm1kOQjrhliYjKIhBhhIgCgUIgDgJQgYhrAdhgQAGgVAIgTQAABTBECHQAjA4BEA3QAbAWAfAVQCHBcDhBcIBUAgIATAHIDIBNQCXBUAiBEQBUBUhUB2QgyBDhVAiIiGAQgAkjBDIgTgOIATAOIAPAKIgPgKg");
	this.shape_6.setTransform(-153.1576,138.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#88C641").s().p("ARpCmIgFgEIgtgeQgRgRARgRIBUhUQAygxAABCQAiAiAAARIgRAyIgQAZIgRAaQgMAFgLAAQgWAAgXgWgAb6CmIgigRQg3g3gTghQgKgSAAgMQAAgxBlhDIARgRQBNhOAmAWQALAGAIAQQARAAAzCnQAAA9gSAaQgGAJgJAFIgBABIAAABQgEAGgIAFQgiAVhqAAgA86BzIhKgOQgggWgagVQgOgrAchUQAAgLACgLQADgZAMgTQAJgQAPgMIAKgHIAhgRIARAAQBUAABEBEQAPAdACBvIAAAFIAAAWIgCARQgHAyg7AAg");
	this.shape_7.setTransform(7.7787,108.5473);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#931800").s().p("AgQA7IgihkIgzhUQg6hGg6gwIA6AAQAsApAfArIB1C4IC5CoIgRAAIhUgyIhDgRIAAARIgyBlg");
	this.shape_8.setTransform(272.3125,-101.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3DF00").s().p("A6LCSIADACQCuCXBNBuIABABQhOhvixiZgAN0EIIABgBIAAAAIgBABgAZ/lrQgyCdh1B/gAaJmOIADgLIgKApIAHgeg");
	this.shape_9.setTransform(108.075,127.4375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#354C02").s().p("AtoLqIhUgiIAAgRIgRgRIBlhlIAzAzIAiARIAAAQIgDAEIgOANIgiBEQgIAIgJAAQgIAAgJgIgEghMAKkQAUgHAUAJIAGABIgugDgAq/KFIgBgBQBQgYA3grIASgNQgVAdgvATQgmAlgcAAQgKAAgIgEgA3WgsIhUgiIAAhlQARgRAAARIBCAhIAjAiQAKAtgaAegADpjaQACgPAEgOQARgyBDgiQBDgQAiAyQBUB2ARBDIgFAJQhvgpiwhKgEAgKgI2QhEgiAAgyQgRgSAighIARgiIARAAIARgRIARAAIAAARIAhAiIARAzQAAAhgyAzQAAAIgFAAQgEAAgIgIgAtoq9QgSgbgMgZIDGAqIgQAKQgiAAhDAiQgRAAgigig");
	this.shape_10.setTransform(9.25,144.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#73430F").s().p("AgqgQIBNAZIAEAFIAEADg");
	this.shape_11.setTransform(-99.15,125.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#011E01").s().p("Aj8A0QAAhkARAAQAiAAAiBTQAhBlgyAAQgiAAgihUgAC5hBQgGgNgDgKQAFgDAEgHIAOgiIADAAQARgRAiBUQAABCgRAAQgNAJgJAAQgdAAAAhLg");
	this.shape_12.setTransform(166.175,-226.9431);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D6FF88").s().p("A/WeDIAAgGIAQALgAIocjQnYhUmCipQMGC6AyARQG2BDFih2IjsBUQikAniTAAQhuAAhlgWgEgkGAa+QhUh2AihDQCTlpQRCmIA6AKIAqAIQD8AyEnBdIqhiXInpgiQkeAAgzARQjbAhgyCYQgXBoBRBpQgPAMgJAPgEAkygPYQAAhEgzghIhUBUQAAhlBUAAQARAAAzB2gAPNzEQhDAAAAgyIBDgiQBDAAAzAyIARAiIAAARIgRARgAUv9VQj9hDh2BDQAvgjA+gLQAhgDAlgBQAVABAWADQA+AIBHAaIAgAMg");
	this.shape_13.setTransform(38.5622,-81.1125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#466613").s().p("EguzAqFQAoA2A0grQgYAZgVAAQgZAAgWgkgEguzAqFQgJgOgIgTQgzhUAii5QAyj9FRiHQEeh2GEAAQDrAAB2ARQDsAiBlgRIA/gQIguAQICHgRQBUgiAzhDQBUh2hUhUQgihDiYhVIjIhNQAagegLgsIgigiIhDgiQAAgRgRARIAABmQjihciGhcIBKAPIBUAAQA7AAAIgyIJeFRQEOCXgzC5QghB2ipAiQkvAyrUhDQuvAAgyI9QBDjbDbh2QFRjsIaBDQHpBVHoAQIARARIAAARIBUAiQARAQARgQIAihEIAOgOQAugIAogMIABABQAhARAzgzQAugSAVgdQCxiVixjyQhlh2lRi5QlyiXiHhVQhlgyhDhUQhUh2BUhUQAyhECYghQCXgRCYARQBBAJC/AoQAMAYASAcQAiAhARAAQBDghAiAAIAQgLIDLAsQFhB2KyD9QEhBpEXgIIAEADQAiAiAigRIARgZQAhgDAigFQARAAD8gzQBIgOA4gXQATAhA3A3IAiARIAQAAQBrAAAhgVQkOEAovghQiYAAkvhDQgugOhNgcIAFgJQgRhDhUh2QgigzhDARQhEAigQAyQgFANgBAQIgcgMIp/kNIpeipIj9ghQioAAhUAhQiHBUCoCpQBlBlCHAyICWAyIBWAjIgEgEIERB6QA6ARAzAXIARARIgpgYIADACIgEgCQCxCZBOBwQBbCthtCXQhVCYjbAhQiGAikfAAQmDgyjKgRQirgZiPgIIgGgBQgUgKgUAIQh+gFhnAHQlRAii5B2QhVBDhDCXQgyBVAABDIgRBUIAAAAgEgr8AnzIACgFIgFAKIADgFgAztboIgGgFIAGAEQBDA4ABApIgBAKIgEAKQAUgvhThFgA2WaCQlQjagzgiQg3gpgsgpIAHAGIBKA+IATAOIAPAKIE4DLIACACIADABIAEADIACACIADABIACACIACABIACACIADABIACACIACABIADACIACABIADACIACABIADACIACABIADACIACACIADABIACACIADACIACACIADABIAHAEIgIgEgAokVyQBZAqBIA8gAf2SaIACAAIgBAAIgBABIAAgBgEAgYAQ1QgziogRAAQgIgQgLgHQAVhKhVgmQgRgRiHAzIiYBDQhAALg+AIQDZgwBOjPQBljbi5lQQCoENgyDKIAyioQAAh2BEhEQAyghBlBlQCpDKgRENQgQECirCmQASgaAAg9gEAg6ALDQgiAhARARQAAAzBDAhQARARAAgRQAzgyAAgiIgRgyIgigiIAAgRIgRAAIgQARIgRAAgA/SPhQhDiHAAhUQgJAUgGAUQAShKArhCQgHA0AcBiQAgBBBYBBQgCAKAAAMQgcBVAOArQhEg4gkg3gEggkAQVIgCgSIgCgKIACAJIADAUgARYONIicgeIB7ANQBUARC5AAQg/AEg7AAQg7AAg3gEgAPixGQhjlbAvl7IgBAPIgLCKQgOEpBPEUIANAsIgOgsgAdfxVIjbhnIh2h2IgGgEIkhjZIhthSIiYi5IguguIhZhZQhDhlARhUQARhEBlghIBDgRICHkOQAPgmAWgfIADgEQAVgdAcgWQAjgnAtgnIhFBFIgYAxQA8gRB1AAQBDAAAzAzIgRAAQkOhlgRCHIAzBUQgRgzAzgyQBDgiCoBUQBlAiARgzQARghgRhlQBEAAARAyIBDAzQARARAhhEQAihDBDgRIgHgGQAOABAKAFQAJAEAEALQgEgLgJgEQgdAAgUATIgBgCQgzAiAABDQAAAVgCAPQgOAXgSAIIgyghIhUhUQgQAAAdAeIA2B5QA7BnAhgZQADAKAGANQAABlAzgiQARAAAAhDQgihUgRARIgDAAIA2iHQAAgiAQARIARAiQgRBDB2BDIBlgOIiGAwIgiAzQAiAhCXARIAiARQjsgii5ARQj9CHARARIAiAyQhEhDgygRIlzgiQhQAAguAIQgkAOgZAPQgtBCCDBCQAzAyCHAiQAyARBlARQBlAhAzgyIBlgzIAABEQgiBlBlAyIB2BEQAzAyAABDIAhCHQARBUB2AAQAyAAD9iGQCHgzB2ARQCXAiBUgiQBEgiCXiGQAigRhUAAIi5B2QgzAhiHAAQkNAAhUAiIjKB2IDripIDKAAQiGghgiiHQgihlBVAAQAFAAAHACQApAAAfAzIAhAfIBVCHQAQAyAihDQARhCAAgiIAAgBIAAghIAIgSQAIgfASgkQAyhUARAyQBDCYhlBlQhDBDBDgQIBlgzQBVgyAAhVQgJg3gjhCIAbAlIAAARIAhBUQARAiBEgRQAyAAARAiQAiAhhEAzIjKC5IAhghIgyAiIiHAQIh2gQIiXAQQkeDLi6hEIjKhlQiXhUgRgzIAAjrIgzhlIARgRIhDAhIgzAAIBEAiIAyAzIAADbQARBlCYBDQBlBlBDAiQBUBDC5hUIDsh2QBUgiCYAiQCXAAARgRIAAgiIABAAQAFAQACAOIgSBGIgJAJIgiAUIgOAGIhsAAIg7AAIgSAAIjOAsIgNAGIi5BUIipAzQgOACgPAAIgEAAgAPH+dQBOBACGBDQBOAnAsAFQAhAEAOgPQAFgFADgGQADgGABgGIAAgBQgxgphAgkIiHhUIgWgKIg1gMIgOABQgGABgGADIghAhIAAgQIgBABIAAgBgEAWHgjQQAiBUAiAAQAyAAghhlQgihUgiAAQgRAAAABlgEAYOglGQBlAzARgzQAigygigzIgDgUQABgWgKgdIgFgeQAABEgRAQQgEANgIAJQgJAIgMAEIidgwIhPgkQhdgvgHDDIgBADIABAAIgBAiQA/g/BPAAQBDAABNAugEAccgp1IglgcQAcANAZAPQAcgLAWgGIhkAyg");
	this.shape_14.setTransform(-0.6374,3.9743);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8CC63F").s().p("EgfgAgPQLUBDEvgyQCogiAih2QAyi5kNiXIpflSIABgRIAAgVIARAFIgRgLQgBhvgQgeQhDhEhUAAIgRAAIgiARIgKAIQhRhpAXhoQAziYDbgiQAygQEfgBIHoAjIKiCXQknhdj8gyIgrgIIg6gKQwQimiUFpQgiBDBVB1IAyAjQgLAUgEAZQhXhBghhBQgchjAIgzQABgKADgIIAsgtQATgUAVgUQBUhDB2giIAAgQQIbiHNbD8QGTCHFRBEIImBpICdAeQBtAIB/gIQBFgFBKgKQA9gIBBgMICYhCQCGgzARARQBVAlgVBLQglgVhOBNIgRARQhlBDAAAzQAAALALATQg5AXhHAOQj9AygRABQghAEgiAEIARgZIARgzQAAgRgighQAAhEgzAzIhUBTQgRASARARIAuAeQkXAHkhhpQqxj8lih2IjLgsIjGgqQi/gnhBgKQiXgQiYAQQiXAigzBDQhUBVBUB2QBEBUBlAyQCGBVFzCXQFRC5BlB2QCxDxixCVIgRAOQg4AqhQAZQgoAMguAIIADgDIAAgRIgigRIgygyIhlBlQnpgRnohUQobhDlRDrQjbB3hDDbQAzo9OvAAgAOyRgQDsAzEehEIDshVQlhB3m2hDQgzgRsGi6QGDCoHXBVgAdA0YIgiiHQAAhDgygyIh2hEQhlgzAhhkIAAhEIhlAzQgyAyhlghQhlgSgzgQQiHgigygzQiDhBAthCQAYgPAlgOQAugIBQAAIFyAhQAzASBDBDIghgzQgRgQD8iHQC6gRDrAhIghgQQiYgRgighIAigzICGgwIBmgkQB2gRDKD8ICoDbQAuA9AcA2QAjBBAJA4QAABUhUAzIhlAyQhDARBDhDQBlhmhDiXQgRgzgzBVQgRAjgJAfIgIATIABAgIAAACQAAAigRBCQgiBDgRgzIhUiGIghggQgfgzgpABQgHgDgGAAQhUABAiBkQAhCICHAhIjKAAIjsCpIDKh2QBUgiEOAAQCHAAAygiIC5h2QBVABgiARQiYCGhDAiQhUAhiYghQh2gRiGAyQj9CHgzAAQh1AAgRhUgEArNgabQgyh3gRABQhUAAAABkIBUhTQAyAhAABEIARAAIAAAAgAUU+6QAAAzBDAAIB2AhIARgQIAAgRIgRgiQgygyhEgBgEASvglfQARiHENBmIARAAQgygzhEAAQh1AAg8ARIAZgyIBEhEQA7gjBlgLQg+ALgvAjQB1hED9BEIARAAIghgNIAyANIAeAXIAlAbIgiAiIBkgyIABgBQAbgNAQAIIAIAFQhDASgiBDQgiBEgRgSIhDgyQgRgyhDgBQARBmgRAhQgRAyhlghQiohUhEAhQgyAzAQAzgEASUgmYIgDAFIgEACgEAX5gpKIAYgBIAUAFQgXgDgVgBg");
	this.shape_15.setTransform(-0.8872,-10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snakeR, new cjs.Rectangle(-305,-273.9,608.7,550.8), null);


(lib.snake = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-281.4,-194.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snake, new cjs.Rectangle(-281.4,-194.2,562.5,390), null);


(lib.snalad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Laag_1
	this.instance = new lib.snakeR();
	this.instance.setTransform(255.5,111.85,0.2964,0.2964,0,0,0,-0.7,1.5);

	this.instance_1 = new lib.ladder();
	this.instance_1.setTransform(98.7,397.7,1,1,0,0,0,25.9,97);

	this.instance_2 = new lib.ladder();
	this.instance_2.setTransform(319.7,290.45,1,1,0,0,0,25.9,97);

	this.instance_3 = new lib.ladder();
	this.instance_3.setTransform(643.7,495.25,1,1,0,0,0,25.9,97);

	this.instance_4 = new lib.snake();
	this.instance_4.setTransform(260.65,563.95,0.3413,0.3809,0,0,0,0,1.1);

	this.instance_5 = new lib.snake();
	this.instance_5.setTransform(259.55,425.4,0.3413,0.3809,0,0,0,0,0.9);

	this.instance_6 = new lib.snakeR();
	this.instance_6.setTransform(478.55,343.25,0.2964,0.2964,0,0,0,-0.7,1.5);

	this.instance_7 = new lib.snakeR();
	this.instance_7.setTransform(478.55,111.85,0.2964,0.2964,0,0,0,-0.7,1.5);

	this.instance_8 = new lib.snake();
	this.instance_8.setTransform(145.6,214.5,0.3374,0.3374,0,0,0,0,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.snalad, new cjs.Rectangle(50.7,30.2,619.0999999999999,607.9), null);


(lib.dice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {roll:7};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_12 = function() {
		this.gotoAndPlay("roll");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// tekst
	this.text = new cjs.Text("Klik om te\nbeginnen", "12px 'Open Sans'", "#7D4E24");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 82;
	this.text.parent = this;
	this.text.setTransform(34.05,18.4);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(12));

	// stippen
	this.instance = new lib.dot();
	this.instance.setTransform(34.65,34.65,1,1,0,0,0,7.5,7.5);

	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(13.45,13.05,1,1,0,0,0,7.5,7.5);

	this.instance_2 = new lib.dot();
	this.instance_2.setTransform(34.65,34.65,1,1,0,0,0,7.5,7.5);

	this.instance_3 = new lib.dot();
	this.instance_3.setTransform(56.4,13.05,1,1,0,0,0,7.5,7.5);

	this.instance_4 = new lib.dot();
	this.instance_4.setTransform(34.65,34.65,1,1,0,0,0,7.5,7.5);

	this.instance_5 = new lib.dot();
	this.instance_5.setTransform(56.4,34.65,1,1,0,0,0,7.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:34.65,y:34.65}}]},1).to({state:[{t:this.instance_1,p:{x:13.45,y:13.05}},{t:this.instance,p:{x:56.4,y:56.1}}]},1).to({state:[{t:this.instance_2,p:{x:34.65,y:34.65}},{t:this.instance_1,p:{x:13.45,y:13.05}},{t:this.instance,p:{x:56.4,y:56.1}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:13.45,y:13.05}},{t:this.instance_1,p:{x:56.4,y:56.1}},{t:this.instance,p:{x:13.45,y:56.1}}]},1).to({state:[{t:this.instance_4,p:{x:34.65}},{t:this.instance_3},{t:this.instance_2,p:{x:13.45,y:13.05}},{t:this.instance_1,p:{x:56.4,y:56.1}},{t:this.instance,p:{x:13.45,y:56.1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{x:13.45}},{t:this.instance_3},{t:this.instance_2,p:{x:13.45,y:13.05}},{t:this.instance_1,p:{x:56.4,y:56.1}},{t:this.instance,p:{x:13.45,y:56.1}}]},1).to({state:[{t:this.instance,p:{x:34.65,y:34.65}}]},1).to({state:[{t:this.instance_1,p:{x:13.45,y:13.05}},{t:this.instance,p:{x:56.4,y:56.1}}]},1).to({state:[{t:this.instance_2,p:{x:34.65,y:34.65}},{t:this.instance_1,p:{x:13.45,y:13.05}},{t:this.instance,p:{x:56.4,y:56.1}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:13.45,y:13.05}},{t:this.instance_1,p:{x:56.4,y:56.1}},{t:this.instance,p:{x:13.45,y:56.1}}]},1).to({state:[{t:this.instance_4,p:{x:34.65}},{t:this.instance_3},{t:this.instance_2,p:{x:13.45,y:13.05}},{t:this.instance_1,p:{x:56.4,y:56.1}},{t:this.instance,p:{x:13.45,y:56.1}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4,p:{x:13.45}},{t:this.instance_3},{t:this.instance_2,p:{x:13.45,y:13.05}},{t:this.instance_1,p:{x:56.4,y:56.1}},{t:this.instance,p:{x:13.45,y:56.1}}]},1).wait(1));

	// vorm
	this.instance_6 = new lib.blok();
	this.instance_6.setTransform(34.65,34.65,1.0014,1.0014,0,0,0,34.6,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-0.2,86.39999999999999,89.4);


// stage content:
(lib.Snakesandladders = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		myStage = this;
		
		var worp = 0;
		var boardPosition = -1;
		var direction = 1;
		var boardsize = 36;
		var tileArray = [];
		var dice = new lib.dice();
		var fiche = new lib.fiche();
		var snalad = new lib.snalad();
		var closeBox = new lib.closeBox();
		var tip = new lib.tip();
		var snakeLadderArray = [];
		var tekstArray = [];
		var queue = new createjs.LoadQueue(true);
		
		
		
		//event listeners and starting the game
		queue.on("fileload", handleFileLoad, this);
		//queue.on("complete", handleComplete, this);
		queue.loadFile({
			src: "gameData.json"
		});
		// function declarations
		
		function handleFileLoad(event) {
			console.log(event.result);
			tekstArray = event.result.tips;
			snakeLadderArray = event.result.snakeLadderArray;
			console.log(tekstArray);
			resetGame();
			buildBoard();
			dice.addEventListener("click", throwDice);
		}
		
		function throwDice() {
			dice.removeEventListener("click", throwDice);
			dice.gotoAndPlay("roll");
			setTimeout(showThrow, 1000);
		}
		
		function showThrow() {
		
			worp = Math.ceil(Math.random() * 6);
			dice.gotoAndStop(worp);
			setTimeout(moveFiche(), 500);
		}
		
		function moveFiche() {
			console.log(boardPosition);
			if (boardPosition == 35) {
				direction = -1;
			}
		
			if (worp > 0) {
				boardPosition = boardPosition + (1 * direction);
				animateFiche();
				setTimeout(moveFiche, 500);
		
			}
		
			if (worp == 0) {
				direction = 1;
		
				if (snakeLadderArray[boardPosition] != boardPosition) {
		
					boardPosition = snakeLadderArray[boardPosition];
					var textTimeOut = setTimeout(showText, 1000);
					var animationTimeout = setTimeout(animateFiche, 500);
				} else {
					setTimeout(showText, 500);
				}
		
			}
			worp--;
		}
		
		function buildBoard() {
			for (var i = 0; i < boardsize; i++) {
				var newTile = new lib.vlak();
				tileArray.push(newTile);
			};
			tileArray.forEach(boardArray);
		
			myStage.addChild(fiche);
			myStage.addChild(snalad);
			myStage.addChild(dice);
			dice.stop();
			dice.x = lib.properties.width - 100;
			dice.y = 50;
			fiche.x = -100;
			fiche.y = -100;
			fiche.name = "fiche";
		};
		
		function boardArray(element, index) {
			myStage.addChild(element);
			var yIndex = Math.ceil((index + 1) / 6) - 1;
			var xIndex = index - (Math.floor(index / 6) * 6);
			if (isOdd(yIndex)) {
				xIndex = 5 - xIndex;
			};
			element.x = 110 * xIndex + 100;
			element.y = lib.properties.height - (110 * yIndex) - 100;
		
		}
		
		function showText() {
			myStage.addChild(tip);
			tip.x = 200;
			tip.y = 175;
			if (boardPosition == 35) {
				tip.tekstvak.text = "Jippie!!!!";
				resetGame();
			} else {
				var randomTip = Math.floor(Math.random() * tekstArray.length);
				tip.tekstvak.text = tekstArray[randomTip].tip;
				setTimeout(addCloseBox, 4000);
			}
		};
		
		function addCloseBox() {
			tip.addChild(closeBox);
			closeBox.x = 324;
			closeBox.y = 28;
			closeBox.addEventListener("click", removeText);
		}
		
		function removeText() {
			myStage.removeChild(tip);
			tip.removeChild(closeBox);
			dice.addEventListener("click", throwDice);
		}
		
		function isOdd(num) {
			return num % 2;
		}
		
		function animateFiche() {
			var tween = createjs.Tween.get(fiche)
				.to({
					x: tileArray[boardPosition].x,
					y: tileArray[boardPosition].y
				}, 500, createjs.Ease.cubicInOut);
		
		}
		
		function resetGame() {
			setTimeout(addCloseBox, 2000);
			fiche.x = -100;
			fiche.y = -100;
			worp = 0;
			boardPosition = -1;
			direction = 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '629687E0B94B9546A2EDDEFB758270CF',
	width: 850,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1711630058699", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['629687E0B94B9546A2EDDEFB758270CF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;