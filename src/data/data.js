import { reactive,ref } from 'vue';
export var account = reactive({});
export var nextUri = ref('');

export let user = reactive([
  {
  fullName: "Ngô Quốc Phú",
  email: "ngoquocphu71@gmail.com",
  password: "d123",
  occupation: "Software Developer",
  description: "I'm a passionate software developer with a love for learning.",
  avatar: "/images/avatar.png",
  phone: '0862492594',
  gender: 'male'
}
])

export let listCmt = reactive([
  {
    idBlog: 1,
    fullName: "Nguyễn Hoàng Linh Chi",
    content: "Bài viết này hay nhất trần đời",
    date: "20/10/2023"
  },
  {
    idBlog: 2,
    fullName: "Nguyễn Hoàng Linh Chi",
    content: "Bài viết này hay quãi ò!",
    date: "29/10/2023"
  },
  {
    idBlog: 2,
    fullName: "Lê Bảo Tường Anh",
    content: "Xia xìa(>_<)!!!",
    date: "25/10/2024"
  },
])

export var listBlog = reactive([
    {
      id: 1,
      title: "Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn",
      content: "Tập Pilates là một phương pháp tập luyện tốt cho sức khỏe tim mạch vì nó kết hợp giữa việc tăng cường khả năng hô hấp và tăng cường sự chắc khỏe của cơ tim. Theo một nghiên cứu từ Trung tâm Y tế Trường Đại học Texas, tập Pilates đã chứng minh sức mạnh trong việc giảm nguy cơ bệnh tim và tăng cường sức khỏe tim mạch.Một trong những yếu tố quan trọng để duy trì sức khỏe tim mạch là tăng cường khả năng hô hấp. Bằng cách tập trung vào việc điều chỉnh hơi thở và tạo sự cân bằng giữa cơ và tâm trí, Pilates giúp bạn rèn luyện khả năng hô hấp sâu và hiệu quả. Điều này mang lại lợi ích lớn cho hệ tim mạch, vì hệ"+
        "tim mạch của chúng ta hoạt động tốt hơn khi nhận được lượng oxy cần thiết từ quá trình hô hấp.Tập Pilates cũng có thể cải thiện tuần hoàn máu trong cơ thể. Nhờ vào các động tác kéo dãn và điều chỉnh cơ bắp, việc lưu thông máu và oxy trong cơ thể được cải thiện đáng kể. Khi cơ bắp được làm việc một cách hiệu quả, máu có thể tuần hoàn tốt hơn trong cơ thể, giúp tăng cường chất lượng và số lượng oxy cung cấp cho tim và các cơ quan khác trong cơ thể."+
        +"Bên cạnh đó, tập Pilates còn giúp cải thiện chức năng của hệ thống tĩnh mạch và tăng cường sự đàn hồi của mạch máu. Nhờ vào việc tăng cường cường độ và linh hoạt của cơ bắp, Pilates giúp loại bỏ sự căng thẳng và tái tạo cơ bắp một cách hiệu quả. Điều này đồng nghĩa với việc máu có thể tuần hoàn dễ dàng hơn, giảm nguy cơ tắc nghẽn mạch máu và các vấn đề tim mạch khác.Một điểm quan trọng khi nói đến sức khỏe tim mạch là giảm căng thẳng và stress. Căng thẳng và stress kéo dài có thể gây ra những tác động tiêu cực đến tim mạch như tăng huyết áp và nhịp tim không ổn định. Tập Pilates mang lại lợi ích rõ rệt trong việc giảm căng thẳng và stress thông qua việc tập trung vào hơi thở, kiểm soát cơ bắp và tạo sự cân bằng giữa cơ và tâm trí."+
        "Khi tập Pilates, bạn phải tập trung vào từng động tác và điều chỉnh cơ thể sao cho đúng vị trí. Quá trình này giúp bạn tha hồ quên đi những suy nghĩ và áp lực hàng ngày, tập trung vào chính bản thân và cảm nhận cơ thể. Kết quả là sự thư giãn và giảm căng thẳng, điều quan trọng để duy trì một tim mạch khỏe mạnh.",
      image: "/images/tim-mach.jpg",
      isNB: false,
      cmt: 59,
      emailAuthor: "ngoquocphu71@gmail.com"
    },
    {
      id: 2,
      title: "EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào?",
      content: "1. Bạn nên ăn những gì trong quá trình Eat Clean? Protein nạc (Lean Protein): Thịt bò, thịt gà và trứng là các nguồn tốt của protein nạc. Có ít chất béo bão hòa và thường giúp tạo cảm giác no lâu hơn. Hải sản (Seafood): Cá hồi, cá thu và các loại hải sản khác chứa nhiều acid béo omega-3. Có lợi cho sức khỏe tim mạch. Protein từ thực vật (Plant-Based Protein): Quinoa, kiều mạch, đậu và các sản phẩm đậu là nguồn protein thực vật. Phù hợp cho người ăn chay hoặc muốn giảm tiêu thụ thịt.Sữa và sản phẩm từ sữa: Sữa tươi, sữa chua, phô mai và bơ. Chứa canxi và protein lành mạnh. Ngũ cốc nguyên hạt (Whole Grains): Gạo lứt, yến mạch và quinoa. Chứa chất xơ và các dưỡng chất quan trọng. Trái cây (Fruits): Trái cây giàu chất chống oxy hóa, vitamin, và chất xơ. Giúp tăng cường sức kháng của cơ thể. Chất béo lành mạnh (Healthy Fats): Bơ, ô liu, cacao, bơ đậu phộng và các loại hạt. Chứa chất béo lành mạnh như axit béo omega-3 và vitamin E."+
      "2. Khi Eat Clean, bạn không nên ăn gì? Chất làm ngọt nhân tạo (Artificial Sweeteners): Các chất như aspartame và saccharin thường được sử dụng để thay thế đường, nhưng có thể gây ra các vấn đề sức khỏe nếu tiêu thụ quá nhiều. Đường tinh luyện (Refined Sugar): Đường tinh luyện có ít dưỡng chất và cao in giá trị calo, có thể gây tăng cân và các vấn đề sức khỏe khác nếu tiêu thụ quá nhiều. Thịt chế biến (Processed Meat): Thịt chế biến như xúc xích, hamburber, và thịt nguội thường chứa nhiều chất bảo quản và chất béo bão hòa, được liên kết với các vấn đề sức khỏe như bệnh tim mạch và ung thư. Thực phẩm đóng gói (Processed Foods): Thực phẩm đóng gói thường chứa chất bảo quản, đường, và natri cao, không tốt cho sức khỏe nếu tiêu thụ quá nhiều. Kẹo (Candy): Kẹo thường chứa đường và hóa chất, và tiêu thụ quá nhiều có thể gây tăng cân và vấn đề sức khỏe. Khoai tây chiên (French Fries): Khoai tây chiên thường được chiên trong dầu nhiều chất béo bão hòa, là thực phẩm không nên ăn thường xuyên. Nước ngọt (Soda): Nước ngọt chứa nhiều đường tinh luyện và không có giá trị dinh dưỡng. Rượu bia (Alcohol): Rượu và bia có thể gây nhiều vấn đề sức khỏe nếu tiêu thụ quá nhiều và không kiểm soát. Một chế độ Eat Clean thường chú trọng không chỉ vào việc loại bỏ thực phẩm không tốt mà còn là việc cân bằng các nguồn dinh dưỡng và duy trì một lối sống lành mạnh tổng thể. Đừng quên uống đủ nước và luyện tập thể dục. Xây dựng thực đơn ăn uống cho clean eating cũng là một cách để xem được tổng quan những nguồn dinh dưỡng cần có.",
      image: "/images/eat-clean.png",
      isNB: false,
      cmt: 69,
      emailAuthor: "ngoquocphu71@gmail.com"
    },
    {
      id: 3,
      title: "Phương pháp tập Pilates giúp phục hồi chấn thương cột sống",
      content: "Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chỉ và cải thiện sự linh hoạt, dẻo dai cho người tập. Đặc biệt, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn thương cột sống. Sau đây hãy cùng Paragate Yoga & Pilates Đà Nẵng tìm hiểu các phương pháp tập luyện này giúp phục hồi chấn thương cột sống nhanh chóng nhé! Tập Pilates là gì? Nguồn gốc phương pháp tập Pilates Các bài tập Pilates được phát minh ra trong Thế chiến I và được đặt theo tên của người tạo ra lĩnh vực này. Joseph Pilates là huấn luyện viên thể hình người Đức gốc Hy Lạp. Sau đó, anh ấy di cư đến Hoa Kỳ, nơi anh ấy đã phát triển môn phương pháp tập Pilates của mình và truyền bá nó ra khắp thế giới. Trước khi chuyển đến Mỹ, anh ấy đã từng là một võ sĩ chuyên nghiệp ở Anh. Anh cũng là một diễn viên xiếc và huấn luyện viên tự vệ tại học viện cảnh sát. Chiến tranh thế giới thứ nhất bùng nổ, ông bị bắt và ngồi tù cùng với các công nhân Đức. Trong thời gian này, ông cũng đã phát triển bộ môn “Contrology” – “Tương Phản”, cho đến ngày nay được gọi là Pilates. Ban đầu, chương trình được tạo ra chỉ để phục hồi chức năng cho các cựu chiến binh, thương binh và tù nhân chiến tranh. Nó cũng giúp cải thiện sức khỏe tinh thần bằng cách ổn định cơ bắp, xây dựng sức mạnh và kéo dài. Sau chiến tranh, ông trở lại Đức, nhưng di cư sang Hoa Kỳ vào khoảng năm 1925. Giai đoạn này cũng là một bước ngoặt đối với các bài tập Pilates khi ông phát triển một chương trình đào tạo phục hồi chức năng cho các vũ công ba lê bị thương. Chuyển động tập trung vào việc kéo dài cơ thể trong vật lý trị liệu và cải thiện tính linh hoạt và cân bằng trong múa ba lê. Phương pháp tập Pilates phát triển Một hệ thống các bài tập để tăng tính linh hoạt và ngăn ngừa chấn thương cũng bao gồm các tư thế yoga. Điều này tạo nên bài tập cột sống giúp vũ công giữ thăng bằng và phát triển hiệu quả. Tư thế đứng sẽ được cải thiện đáng kể, cơ bắp dẻo dai hơn và cơ thể dẻo dai hơn. Khi mẹ của cựu Hoa hậu Rosanna Davison hồi phục chấn thương cổ do ngã ngựa nhờ các bài tập Pilates, lợi ích của các bài tập này đã được chứng minh, và bản thân người đẹp đã cao thêm 3cm nhờ các bài tập Pilates. Một trường hợp khác là cầu thủ Phil Jones cũng đã bình phục chấn thương mắt cá khi tập luyện môn này và lấy lại thể lực. Các phương pháp tập Pilates ngày nay nhằm giúp người tập kết nối cột sống để cải thiện nhận thức về hơi thở, từ đó tăng cường sức mạnh cho vùng lõi và cơ bụng. Các bài tập về cột sống cũng đóng vai trò rất quan trọng trong quá trình hồi phục chấn thương cột sống của con người. Sau một thời gian dài phát triển, phương pháp tập Pilates đã phát triển từ một chương trình cải thiện thể chất cho các cựu chiến binh và quân nhân thành một hệ thống giáo dục thể chất phổ biến được hơn 11 triệu người ở Hoa Kỳ tập luyện (dữ liệu từ năm 2005). Và cho đến nay, con số này đã tăng lên gấp nhiều lần với sự lan tỏa của các ngôi sao nổi tiếng thế giới.Pilates giúp phục hồi chấn thương cột sống nhanh chóng. Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn phòng, đó là đau lưng, thoát vị đĩa đệm. Tuy nhiên, nếu điều trị không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm, bao gồm: Ví dụ, điều trị bằng laser không đúng cách hoặc tập yoga không đúng cách có thể khiến bệnh nhân nằm liệt giường.",
      image: "/images/tap-piltes.jpg",
      isNB: false,
      cmt: 27 ,
      emailAuthor: "ngoquocphu72@gmail.com"
    },
    {
      id: 4,
      title: "Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn",
      content: "Hầu hết các lớp Pilates kéo dài khoảng 45 phút đến một giờ.Mặc dù bạn có thể không nhận thấy tất cả những lợi ích này sau buổi tập đầu tiên, nhưng việc luyện tập thường xuyên sẽ giúp cơ thể bạn săn chắc và săn chắc hơn, cũng như cải thiện tư thế và tăng tính linh hoạt của bạn.Sau buổi tập Pilates đầu tiên, bạn có thể bị đau nhức – DOMS (đau nhức cơ khởi phát muộn) thường xảy ra từ 24 đến 48 giờ sau khi tập luyện và hoàn toàn bình thường. Hãy chắc chắn để kéo dài và giữ nước trong thời gian này. Bạn muốn tập Pilates tại nhà? Dưới đây là 5 bài tập cơ bụng Pilates để tăng cường sức mạnh cốt lõi của bạn, bài tập cơ bụng và mông Pilates bạn có thể thực hiện tại nhà và mọi thứ bạn cần biết về Pilates để giảm cân. Lợi ích của Tập Pilates là gì? Đây là những gì một lớp Pilates thông thường có thể làm cho bạn và cơ thể của bạn: Pilates có thể cải thiện sức mạnh cốt lõi của bạn Một trong những trọng tâm chính của Pilates là tăng cường sức mạnh cốt lõi . trung tâm của cơ thể, bao gồm bụng, lưng dưới và sàn chậu.Tuy nhiên, nếu mục tiêu của bạn là có được cơ bụng săn chắc, thì không có số lượng lớp Pilates riêng sẽ tạo ra sự khác biệt ,cơ bụng săn chắc là kết quả của tỷ lệ mỡ cơ thể thấp, đó là lý do tỷ lệ mỡ của bạn và tầm quan trọng của nó. Tuy nhiên, một cốt lõi mạnh mẽ không chỉ là một mục tiêu thẩm mỹ . Sức mạnh cốt lõi giúp bạn chạy khỏe hơn, nâng vật nặng hơn, ngồi với tư thế tốt hơn và tránh chấn thương. Một nghiên cứu nhỏ đã phát hiện ra rằng các lớp học kéo dài hai giờ hàng tuần trong 12 tuần đã cải thiện sức mạnh vùng bụng và tư thế lưng trên. Tập Pilates có thể giảm đau lưng. Nói về lưng của bạn, có một lý do tại sao Pilates thường được khuyên dùng cho những chấn thương đang hồi phục – đó là một cách tăng cường cơ bắp ít tác động. Vì môn này nhắm vào cơ bụng và sàn chậu nên một số nghiên cứu đã chỉ ra rằng nó có thể tăng cường sức mạnh cho lưng và giảm đau lưng. Tập Pilates có thể tăng tính linh hoạt Một khía cạnh đặc biệt quan trọng nếu bạn ngồi ở bàn làm việc trong thời gian dài, Pilates tập trung vào sự liên kết cơ thể tốt, được hỗ trợ bởi phần lõi khỏe .Đó là lý do tại sao nó hoàn hảo cho người chạy bộ, người đi xe đạp hoặc bất kỳ ai tập thể dục .Vì nó giúp bạn rèn luyện những vùng yếu hơn trên cơ thể và ngăn ngừa chấn thương. Bằng cách thực hiện các bài tập Pilates thường xuyên để tăng cường sức mạnh cho các cơ yếu hơn và lưng của bạn , bạn sẽ thường xuyên thấy sự cải thiện về tư thế của mình.",
      image: "/images/tap-pilates1.jpg",
      isNB: false,
      cmt: 93 ,
      emailAuthor: "ngoquocphu72@gmail.com"
    },
    {
      id: 5,
      title: "Các lợi ích khi ăn rau mỗi ngày",
      content: "Cải thiện thị lực: Theo The Health Site, tất cả các loại rau xanh đều hữu ích trong việc cải thiện thị lực. Chúng có hàm lượng lutein và zeaxanthin cao, các thành phần quan trọng cho đôi mắt, bảo vệ các điểm vàng, ngăn chặn thiệt hại do ánh sáng xanh. Chúng cũng giúp ngăn ngừa các bệnh về mắt như đục thủy tinh thể, thoái hóa điểm vàng do lão hóa. Ngoài ra, cơ thể con người chuyển đổi beta-carotein trong rau lá xanh thành vitamin A, giảm nguy cơ mắc bệnh quáng gà. Kiểm soát cân nặng: Rau lá xanh rất ít calo, nhiều dinh dưỡng. Chúng là một trong số ít thực phẩm bạn có thể ăn nhiều mà vẫn giảm cân. Vì vậy, chúng được khuyến khích bổ sung vào bữa ăn hàng ngày, đặc biệt là bữa trưa để kiểm soát trọng lượng cơ thể dễ dàng hơn. Nguồn dinh dưỡng tối ưu Bạn cần ăn rau xanh hàng ngày vì chúng cung cấp lượng vitamin, khoáng chất cần thiết cho cơ thể. Có một số loại vitamin được lưu trữ trong cơ thể để sử dụng cho tương lai, nhưng một số loại thì không. Các loại vitamin nhóm B như vitamin B1, B2, B3, B5, B6, B12, biotin, choline, axit folic và vitamin C là những loại vitamin tan trong nước, không thể lưu trữ trong cơ thể và cần bổ sung hàng ngày. Trong khi đó, rau xanh là nguồn thực phẩm phong phú cho một hỗn hợp đầy đủ các loại vitamin tan trong nước này. Tốt cho xương khớp: Theo thời gian, xương khớp có xu hướng trở nên yếu hơn, đặc biệt là phụ nữ, dễ mắc các bệnh loãng xương hay nội tiết. Rau xanh chứa hàm lượng canxi, vitamin K cao, có khả năng củng cố xương, cải thiện mật độ xương, làm chúng dày và khỏe mạnh hơn. Ngăn ngừa ung thư: Một số nghiên cứu cho thấy tác động của chế độ ăn uống giàu rau xanh có thể phòng chống ung thư. Chúng chứa nhiều chất chống oxy hóa, carotenoids, flavonoids giúp chống lại các bệnh ung thư dạ dày, ruột, da và ung thư vú. Thường xuyên tiêu thụ bông cải xanh, cải bruxen, bắp cải kích thích cơ thể sản xuất ra các hợp chất chống ung thư như indoles, sulforaphane, isothiocyanates…Giảm nguy cơ mắc bệnh tiểu đường: Rất nhiều loại rau xanh như rau bina, cải xoăn có nồng độ polyphenol và các chất chống oxy hóa cao, những hợp chất hữu ích trong việc ngăn ngừa bệnh tiểu đường loại 2. Phòng chống bệnh tim: Chế độ ăn nhiều rau có thể làm giảm huyết áp và giảm nguy cơ mắc bệnh tim và đột quỵ. Các kết quả nghiên cứu cho thấy chế độ ăn kiêng từ thực vật giúp cải thiện sức khỏe tim mạch tổng thể của bạn.",
      image: "/images/spinach_300x300.jpg",
      isNB: true,
      cmt: 12,
      emailAuthor: "ngoquocphu72@gmail.com"
    },
    {
      id: 6,
      title: "9 tác dụng tuyệt vời của quả cam",
      content: "Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thị lực, kiểm soát cân nặng, ngăn ngừa ung thư, thanh nhiệt... lực. Chúng có hàm lượng lutein và zeaxanthin cao, các thành phần quan trọng cho đôi mắt, bảo vệ các điểm vàng, ngăn chặn thiệt hại do ánh sáng xanh. Chúng cũng giúp ngăn ngừa các bệnh về mắt như đục thủy tinh thể, thoái hóa điểm vàng do lão hóa. Ngoài ra, cơ thể con người chuyển đổi beta-carotein trong rau lá xanh thành vitamin A, giảm nguy cơ mắc bệnh quáng gà. Kiểm soát cân nặng: Rau lá xanh rất ít calo, nhiều dinh dưỡng. Chúng là một trong số ít thực phẩm bạn có thể ăn nhiều mà vẫn giảm cân. Vì vậy, chúng được khuyến khích bổ sung vào bữa ăn hàng ngày, đặc biệt là bữa trưa để kiểm soát trọng lượng cơ thể dễ dàng hơn. Nguồn dinh dưỡng tối ưu Bạn cần ăn rau xanh hàng ngày vì chúng cung cấp lượng vitamin, khoáng chất cần thiết cho cơ thể. Có một số loại vitamin được lưu trữ trong cơ thể để sử dụng cho tương lai, nhưng một số loại thì không. Các loại vitamin nhóm B như vitamin B1, B2, B3, B5, B6, B12, biotin, choline, axit folic và vitamin C là những loại vitamin tan trong nước, không thể lưu trữ trong cơ thể và cần bổ sung hàng ngày. Trong khi đó, rau xanh là nguồn thực phẩm phong phú cho một hỗn hợp đầy đủ các loại vitamin tan trong nước này. Tốt cho xương khớp: Theo thời gian, xương khớp có xu hướng trở nên yếu hơn, đặc biệt là phụ nữ, dễ mắc các bệnh loãng xương hay nội tiết. Rau xanh chứa hàm lượng canxi, vitamin K cao, có khả năng củng cố xương, cải thiện mật độ xương, làm chúng dày và khỏe mạnh hơn. Ngăn ngừa ung thư: Một số nghiên cứu cho thấy tác động của chế độ ăn uống giàu rau xanh có thể phòng chống ung thư. Chúng chứa nhiều chất chống oxy hóa, carotenoids, flavonoids giúp chống lại các bệnh ung thư dạ dày, ruột, da và ung thư vú. Thường xuyên tiêu thụ bông cải xanh, cải bruxen, bắp cải kích thích cơ thể sản xuất ra các hợp chất chống ung thư như indoles, sulforaphane, isothiocyanates…Giảm nguy cơ mắc bệnh tiểu đường: Rất nhiều loại rau xanh như rau bina, cải xoăn có nồng độ polyphenol và các chất chống oxy hóa cao, những hợp chất hữu ích trong việc ngăn ngừa bệnh tiểu đường loại 2. Phòng chống bệnh tim: Chế độ ăn nhiều rau có thể làm giảm huyết áp và giảm nguy cơ mắc bệnh tim và đột quỵ. Các kết quả nghiên cứu cho thấy chế độ ăn kiêng từ thực vật giúp cải thiện sức khỏe tim mạch tổng thể của bạn.",
      image: "/images/orange_300x300.jpg",
      isNB: true,
      cmt: 79,
      emailAuthor: "ngoquocphu72@gmail.com"
    },
    {
      id: 7,
      title: "10 công dụng bất ngờ từ dầu dừa",
      content: "Dầu dừa là một thực phẩm giá rẻ nhưng có công dụng bất ngờ mà ít người biết trong việc cải thiện thị lực. Chúng có hàm lượng lutein và zeaxanthin cao, các thành phần quan trọng cho đôi mắt, bảo vệ các điểm vàng, ngăn chặn thiệt hại do ánh sáng xanh. Chúng cũng giúp ngăn ngừa các bệnh về mắt như đục thủy tinh thể, thoái hóa điểm vàng do lão hóa. Ngoài ra, cơ thể con người chuyển đổi beta-carotein trong rau lá xanh thành vitamin A, giảm nguy cơ mắc bệnh quáng gà. Kiểm soát cân nặng: Rau lá xanh rất ít calo, nhiều dinh dưỡng. Chúng là một trong số ít thực phẩm bạn có thể ăn nhiều mà vẫn giảm cân. Vì vậy, chúng được khuyến khích bổ sung vào bữa ăn hàng ngày, đặc biệt là bữa trưa để kiểm soát trọng lượng cơ thể dễ dàng hơn. Nguồn dinh dưỡng tối ưu Bạn cần ăn rau xanh hàng ngày vì chúng cung cấp lượng vitamin, khoáng chất cần thiết cho cơ thể. Có một số loại vitamin được lưu trữ trong cơ thể để sử dụng cho tương lai, nhưng một số loại thì không. Các loại vitamin nhóm B như vitamin B1, B2, B3, B5, B6, B12, biotin, choline, axit folic và vitamin C là những loại vitamin tan trong nước, không thể lưu trữ trong cơ thể và cần bổ sung hàng ngày. Trong khi đó, rau xanh là nguồn thực phẩm phong phú cho một hỗn hợp đầy đủ các loại vitamin tan trong nước này. Tốt cho xương khớp: Theo thời gian, xương khớp có xu hướng trở nên yếu hơn, đặc biệt là phụ nữ, dễ mắc các bệnh loãng xương hay nội tiết. Rau xanh chứa hàm lượng canxi, vitamin K cao, có khả năng củng cố xương, cải thiện mật độ xương, làm chúng dày và khỏe mạnh hơn. Ngăn ngừa ung thư: Một số nghiên cứu cho thấy tác động của chế độ ăn uống giàu rau xanh có thể phòng chống ung thư. Chúng chứa nhiều chất chống oxy hóa, carotenoids, flavonoids giúp chống lại các bệnh ung thư dạ dày, ruột, da và ung thư vú. Thường xuyên tiêu thụ bông cải xanh, cải bruxen, bắp cải kích thích cơ thể sản xuất ra các hợp chất chống ung thư như indoles, sulforaphane, isothiocyanates…Giảm nguy cơ mắc bệnh tiểu đường: Rất nhiều loại rau xanh như rau bina, cải xoăn có nồng độ polyphenol và các chất chống oxy hóa cao, những hợp chất hữu ích trong việc ngăn ngừa bệnh tiểu đường loại 2. Phòng chống bệnh tim: Chế độ ăn nhiều rau có thể làm giảm huyết áp và giảm nguy cơ mắc bệnh tim và đột quỵ. Các kết quả nghiên cứu cho thấy chế độ ăn kiêng từ thực vật giúp cải thiện sức khỏe tim mạch tổng thể của bạn.",
      image: "/images/sesameoil_300x300.jpg",
      isNB: true,
      cmt: 72,
      emailAuthor: "ngoquocphu72@gmail.com"
    },
    {
      id: 8,
      title: "100 Câu nói của Warren Buffett",
      content: "Cuộc sống bận rộn đôi khi khiến bạn quên mất việc thư giãn. Hãy đi du lịch để tìm lại sự cân bằng và niềm vui. Bài viết này sẽ giúp bạn chọn một chuyến đi phù hợp với Mytour. Những câu nói tuyệt vời của Warren Buffett về đầu tư và cuộc sống đang gây sốt hiện nay. Hãy cùng khám phá 100 câu nói hay nhất của huyền thoại đầu tư Warren Buffett trong bài viết dưới đây. Warren Buffett, huyền thoại đầu tư theo giá trị, doanh nhân thành đạt và nhà từ thiện với lối sống giản dị và khối tài sản khổng lồ. Ông nổi tiếng với triết lý đầu tư và những câu nói về cuộc sống, truyền cảm hứng cho những đam mê đầu tư. Dưới đây là sưu tập 100 câu nói hay nhất của huyền thoại đầu tư Warren Buffett do Mytour tổng hợp và chia sẻ. Hãy cùng đắm chìm trong những triết lý và trí tuệ của ông. 1. Giới Thiệu Về Warren Buffett Warren Buffett, tên đầy đủ Warren Edward Buffett, sinh ngày 30 tháng 8 năm 1930 tại Omaha, tiểu bang Nebraska, Hoa Kỳ. Là một nhà đầu tư, doanh nhân và nhà từ thiện vĩ đại, ông đứng đầu danh sách những người đầu tư thành công nhất thế giới, là cổ đông lớn kiêm giám đốc hãng Berkshire Hathaway. Forbes xếp ông là người giàu thứ bảy trên thế giới với tài sản khoảng 100,6 tỷ USD tính đến tháng 4/2021. Warren Buffett, biệt danh 'Huyền Thoại Từ Omaha' hoặc 'Hiền Tài Xứ Omaha', nổi tiếng với phong cách đầu tư theo giá trị và cuộc sống giản dị. Ngoài ra, ông còn được biết đến như nhà từ thiện, đã tặng 99% giá trị tài sản cho Hội Gates, do Bill Gates sáng lập, cùng nhiều hoạt động từ thiện khác. 2. Nguyên Tắc Vàng của Ông Warren Buffett “Quy tắc thứ nhất là không bao giờ mất tiền. Quy tắc thứ hai là không bao giờ quên Quy tắc thứ nhất.” Nguyên tắc này không phải lúc nào cũng thành công, nhưng thông điệp chính là nhấn mạnh việc bảo toàn vốn khi đầu tư, là ưu tiên hàng đầu.Câu Nói và Quan Điểm Tuyệt Vời của Huyền Thoại Đầu Tư Warren Buffett về Góp Vốn Đầu Tư Giá Trị, Xử Lý Góp Vốn Thua Lỗ, và Tầm Quan Trọng Của Danh Tiếng.",
      image: "/images/hqdefault.png",
      isNB: false,
      cmt: 31,
      emailAuthor: "ngoquocphu72@gmail.com"
    }
  ]);