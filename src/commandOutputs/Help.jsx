
function Help(){
    const htmlOutput=[
    '-command-          -What it does-',
    ' help       ------>  Shows help menu',
    ' about      ------>  Who am I?',
    ' resume     ------>  Resume for prospective employers',
    ' contact    ------>  How can you contact me?',
    ' pprojects  ------>  Personal Projects',
    ' aprojects  ------>  Academic Projects',
    ' clear      ------>  Clears terminal',
    ' back       ------>  Go to previous page',
    ' aprojects  ------>  Academic Projects',
    ' secret     ------>  ???????']

      return (
        //Display the text above one line at a time
        <div class="help_line">
          {htmlOutput.map((line, index) => (
            <pre className="help_row" key={index}>{line}</pre>
          ))}
          <br></br>
        </div>
      );
}


export default Help
