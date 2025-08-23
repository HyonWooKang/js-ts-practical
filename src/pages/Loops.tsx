export default function Loops() {
  /* for문 */
  // 기본 순회
  const arr = [1, 2, 3];
  let forResultNo1 = "";
  for (let i = 0; i < arr.length; i++) {
    forResultNo1 += arr[i] + " ";
  }
  // 조기 종료
  const items = [1, 3, 7, 9];
  for (let i = 0; i < items.length; i++) {
    if (items[i] > 5) {
      console.log("찾았다:", items[i]);
      break;
    }
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>반복문 (Loops)</h1>
      <section>
        <h2> 1. for문 </h2>
        <p>
          기본적인 반복문 <br />
          장점: index 접근/제어 가능, 조기 종료 가능, 안정적인 성능 <br />
          단점: 코드가 김(가독성이 떨어짐)
        </p>
        <p>기본 순회 결과 : {forResultNo1}</p>
        <p>기본 순회 결과 : {forResultNo1}</p>
      </section>
    </div>
  );
}
