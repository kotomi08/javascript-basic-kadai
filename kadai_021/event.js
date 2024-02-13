// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');

// textというidを持つHTMLを取得し、定数に代入する
const mkText = document.getElementById('txet');

// HTML要素がクリックされたときにイベントを実行
clickBtn.addEventListener('click', () => {
    // 2秒後（2000秒）後に、非同期処理を実行する
    setTimeout(() => {
        const mkText = document.createElement('text');
        text.textContent = 'ボタンをクリックしました';
    },2000);
});
