// モーダル要素を取得
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// ギャラリー内の全ての画像を取得
const images = document.querySelectorAll(".gallery-item img");

// 各画像にクリックイベントリスナーを設定
images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block"; // モーダルを表示
        modalImg.src = this.src; // クリックされた画像のソースをモーダル画像に設定
        // data-caption属性からキャプション（説明文）を取得
        captionText.innerHTML = this.getAttribute("data-caption");
    });
});

// 閉じるボタンがクリックされたらモーダルを非表示
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// モーダル外の領域がクリックされたらモーダルを非表示
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}