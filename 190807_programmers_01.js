var s = [0,1,1,1,0,1,1,1,1,1]
var count = 0; // 
var i;
var check = 0;

for (var i = 0; i < s.length; i++) {
  if (check != s[i]) {
    console.log("check", check)
    if (check === 1 ) {
    console.log("check2", check)
      
        console.log(check, count);
    }
    check = s[i];   
    count = 1;
  } else {
    count++;
  }
}
  if(count > 0){
    console.log(check, count)}


    ///
    function solution(board) {
        var answer = 0;
        var oneCountArr = [];
        var count = 0;
        
        for (var i = 0; i < board.length; i++) {
          for (var j = 0; j < board[i].length; j++)
          if(board[i][j] === 0) {
            oneCountArr.push(0); 
          }
          if(board[i][j] === 1) {
           //count board[i+1][j]가 연속으로 1인것이 몇개인지 카운트한다
           //
          }  
        }
      }

      //도저히 안되겠다ㅠㅠ
      //1이 a번 연속될때마다, 연속되는 1의 위아래 열에서 1이 a만큼 연속되는지를 확인해야해.
//기준은 

function indexArr(a) {
    let count = 0;
    let oneIndex = [];
    let index = 1;
  
    a.push(0)
    for(let i = 0; i < a.length; i++){
    
      if (index === a[i]) {
        oneIndex.push(i);
        index = a[i];
        count++    
      } else {
        oneIndex.push(`count:${count}`);
        var memo = count;
        count = 0;
      }
    }
    return oneIndex;
  };
  
  function solution(board) {
    
    for(let i = 0; i < board.length; i++){
      var returnIndexArr = indexArr(board[i]);  
      console.log(returnIndexArr)
    }
  }
  
  solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]])
  // var a = [0,1,1,1,0,1,1,0,1,1,1,1,1];
  // //a[i]가 1일때 이어지는 1이 있으면,
  // // 그 인덱스를 새로운 배열에 담는다.
  // // 그 배열 속성개수 = 연속되는 수 카운트가 된다.
  // let count = 0;
  // let oneIndex = [];
  // let index = 1;
  
  // a.push(0)
  // for(let i = 0; i < a.length; i++){
    
  //   if (index === a[i]) {
  //     oneIndex.push(i);
  //     index = a[i];
  //     count++    
  //   } else {
  //     oneIndex.push(`count:${count}`);
  //     count = 0;
  //   }
  // }
  
  // console.log(oneIndex)
  