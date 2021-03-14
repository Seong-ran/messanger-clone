function checkUserId(id) {

    /* 정규식 */
  var idRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/; 
  /* 테스트를 시행하는데 통과하지 못하면 false다 */
  if (!idRegExp.test(id)) {
      window.alert("아이디는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
      return false;
  }
  return true;
}

function checkPassword(passw) {

var passwordRegExp = /^[a-zA-z0-9]{4,12}$/; //비밀번호 유효성 검사
if (!passwordRegExp.test(passw)) {
    window.alert("비밀번호는 영문 대소문자와 숫자 4~12자리로 입력해야합니다!");
    return false;
}

return true; //확인이 완료되었을 때
}   

function checkAll() {
  /* 폼을 선택해서, 그 중에 유저네임이라는 네임의 벨류를 가져온다. */
if (!checkUserId($("form")[0].username.value)) {
    return false;
} else if (!checkPassword($("form")[0].passW.value)) {
    return false;
} 
return true;
}