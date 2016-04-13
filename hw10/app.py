from flask import Flask, render_template, request
import urllib2, json, appextended
import time

def timeThis(fn):
    def timefn( *arg ):
        time1 = time.time()
        fn( *arg )
        time2 = time.time()
        return "Time elapsed: " + str(time2 - time1) + " seconds"
    print timefn

def nameAndArgs(fn):
    def retNameAndArgs( *arg ):
        return "Name: " + fn.func_name + " Args: " + str(arg)
    print retNameAndArgs
                                                        

app = Flask(__name__)

# Homepage

#@nameAndArgs
#@timeThis
@app.route("/")
@timeThis
@nameAndArgs
def index():
    return render_template("index.html")



# Site to choose a movie
#@timeThis
#@nameAndArgs
@app.route("/quiz", methods=["GET", "POST"])
@nameAndArgs
@timeThis
def quiz(tag="toprated"):
    if tag == "toprated":
        return appextended.topRated()
    else:
        return appextended.specMovie(tag)

# Site with the actual quiz
#@timeThis
#@nameAndArgs
@app.route("/quiz/<tag>", methods=["GET", "POST"])
@nameAndArgs
@timeThis
def submission(tag):
    if request.method == "GET": 
        return appextended.specMovie(tag)
    else:
        key = "bb8c8b5dede831baad7b87391d01d20c"
        creds = "append_to_response=credits"
        uri = "https://api.themoviedb.org/3/movie/%s?api_key=%s&%s"
        url = uri%(tag, key, creds)

        # 
        requested = urllib2.urlopen(url)
        result = requested.read()
        r = json.loads(result)
        
        cast = r["credits"]["cast"]
        
        actor = []
        character = []
        for i in range (0, len(cast)):
            actor.append(cast[i]["name"])
            character.append(cast[i]["character"])

        button = request.form['button']
        if button == "Submit":
            status = "submitted"
            return render_template("results.html", status = status, character=character, actor=actor)
        else:
            status = "giveup"
            return render_template("results.html", status = status, character=character, actor=actor)
            

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
