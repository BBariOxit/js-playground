// cái này là để gọi hồn thư viện 'path' của Node.js ra để xử lý đường dẫn cho chuẩn
const path = require("path");
// Thằng này cực quan trọng: Nó tự đẻ ra file index.html và nhét cái file JS đã build vào đó
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Chế độ 'development' là để vừa code vừa fix bug, code build ra nó còn dễ đọc
  // Khi nào đem ra cho khách hàng thì đổi thành 'production' cho nó nén nhỏ lại
  mode: "development",

  // "Cửa vào" của dự án. Thằng Webpack sẽ mò vào đây đầu tiên để bắt đầu làm
  entry: "./src/index.js",

  // "Cửa ra": Nơi chứa các thứ sau khi đã được Webpack xào nấu xong
  output: {
    // Đường dẫn đến thư mục chứa sản phẩm (thường là folder 'dist' hoặc 'build')
    path: path.resolve(__dirname, "dist"), 
    // Tên file JS cuối cùng. [contenthash] là để mỗi lần sửa code, nó đổi tên file 
    // để thằng trình duyệt ko lưu cache cũ, tránh cái lỗi "sao em sửa mà web đ đổi"
    filename: "bundle.[contenthash].js",
    // Trước khi build cái mới thì dọn dẹp sạch sẽ cái đống cũ đi cho đỡ rác
    clean: true,
  },

  // Cái đống luật lệ để Webpack biết cách xử lý từng loại file
  module: {
    rules: [
      {
        // Gặp file có đuôi .js hoặc .jsx thì dừng lại...
        test: /\.(js|jsx)$/,
        // ... nhưng ko được động vào đống node_modules, chỗ đấy là của người ta, động vào là nát dự án
        exclude: /node_modules/,
        // ... rồi dùng thằng Babel-loader để "dịch" code JS đời mới về đời cũ cho mấy cái trình duyệt nó hiểu được
        use: ["babel-loader"],
      },
      {
        // Gặp file CSS thì làm gì?
        test: /\.css$/,
        // Dùng style-loader để bơm CSS vào thẻ <style>, css-loader để hiểu đống @import trong CSS
        use: ["style-loader", "css-loader"],
      },
      {
        // Gặp ảnh (png, jpg, svg...) thì dùng cái này để nó tự copy vào folder build
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // Đống đồ chơi đi kèm để hỗ trợ tận răng
  plugins: [
    new HtmlWebpackPlugin({
      // Lấy file HTML gốc làm mẫu để nó đẻ ra file HTML ở folder build
      template: "./src/index.html",
    }),
  ],

  // Cái này là "phòng thí nghiệm": Nó tạo ra một cái server ảo (thường là localhost:8080)
  // để mỗi khi Ctrl+S là cái web nó tự cập nhật, ko phải ngồi F5 như thằng tự kỷ
  devServer: {
    static: "./dist",
    hot: true, // sửa đâu web đổi đấy
    open: true, // Chạy lệnh cái là nó tự mở trình duyệt lên luôn
  },
};