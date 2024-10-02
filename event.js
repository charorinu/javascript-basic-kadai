// HTML要素を定数に代入
const button = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときのイベントリスナーを追加
button.addEventListener('click', () => {
  // 2秒後に文章を書き換える
  setTimeout(() => {
    text.textContent = '2秒後に文章が書き換わりました！';
  }, 2000);
});
