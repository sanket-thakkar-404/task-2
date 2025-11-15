const btn = document.querySelector('button');
const teamName = document.querySelector('.team-name');
const caption = document.querySelector('.caption img')
const captionName = document.querySelector(".main");
const player = document.querySelectorAll('.player img')
const playerName = document.querySelectorAll('.player h1')
const container = document.querySelector('.container')
const teamFullName = document.querySelector('.team-details h1');
const teamDescription = document.querySelector('.team-details p')
const listItems = document.querySelectorAll('ul li ')
const flag = document.querySelector('.team-flag img');





const teams = [
  {
    teamName: "RCB",
    teamFullName: "Royal Challengers Bangalore",
    winner: "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2025-06/_AIL8656.jpg?itok=vcdm3E9V",
    teamFullName: "Royal Challengers Bengaluru",
    teamDescription: " Royal Challengers Bengaluru, formerly Royal Challengers Bangalore, also known as RCB, are a professional Twenty20 cricket team based in Bengaluru, Karnataka, that competes in the Indian Premier League (IPL). The team finished as the runners-up on three occasions: in 2009, 2011, and 2016.",
    caption: "https://documents.iplt20.com/ipl/IPLHeadshot2025/597.png",
    captionName: "Rajat Patidar",
    playerName: ["Virat Kohli", "Phil Salt", "Jitesh Sharma", "Swastik Chhikara", "Tim Seifert", "Mayank Agarwal", "Liam Livingstone", "Krunal Pandya", "Blessing  Muzarabani", "Josh Hazlewood", "Rasikh Dar"],
    player: ["https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/1220.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/1000.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/3102.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/82.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/55.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/183.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/17.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/827.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/36.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/172.png"],
    teamDetails: ["Royal Challengers Sports Private Ltd", "Andy Flower ", "Rajat Patidar"],
    flag: "https://i.ytimg.com/vi/7zVX_LMA45M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHfMUKT5h50dIXiWYWN1XYvYi7tA"

  },
  // ================= CSK =================
  {
    teamName: "CSK",
    teamFullName: "Chennai Super Kings",
    winner: "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2023-05/ezgif.com-webp-to-jpg%20%28100%29.jpg?itok=nu7rwnaq",
    teamFullName: "Chennai Super Kings",
    teamDescription: "Chennai Super Kings, commonly known as CSK, are a professional Twenty20 cricket franchise based in Chennai, Tamil Nadu, competing in the Indian Premier League (IPL). The team is renowned for its consistency, strong leadership, disciplined approach, and loyal fan following, earning a reputation as one of the most successful and respected sides in the league.",
    caption: "https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png",
    captionName: "MS Dhoni",
    playerName: ["Dewald Brevis", "Devon Conway", "Rahul Tripathi", "Shaik Rasheed", "Andre Siddarth", "Ravichandran Ashwin", "Vijay Shankar", "Sam Curran", "Anshul Kamboj", "Noor Ahmad", "Mukesh Choudhary"],
    player: ["https://documents.iplt20.com/ipl/IPLHeadshot2025/797.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/601.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/188.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/778.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/3157.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/45.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/61.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/138.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/3106.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/975.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/970.png"],
    teamDetails: ["N. Srinivasan", "Stephen Fleming", "MS Dhoni"],
    flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FwSqaXw1rWQlnubH03Htpv-j7p-rIt_N4g&s"

  },

  // ================= MI =================
  {
    teamName: "MI",
    teamFullName: "Mumbai Indians",
    winner: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201905/mumbai13052019.jpeg?size=690:388",
    teamFullName: "Mumbai Indians",
    teamDescription: "Mumbai Indians, popularly called MI, are a professional Twenty20 cricket team representing Mumbai, Maharashtra, in the Indian Premier League (IPL). Known for their strong core, powerful match-winners, and top-tier management, the franchise has built a legacy of excellence and remains one of the most dominant and admired teams in IPL history.",
    caption: "https://documents.iplt20.com/ipl/IPLHeadshot2025/54.png",
    captionName: "Hardik Pandya",
    playerName: ["Rohit Sharma", "Surya Kumar Yadav", "Robin Minz", "N. Tilak Varma", "Bevon Jacobs", "Naman Dhir", "Mitchell Santner", "Raj Angad Bawa", "Karn Sharma", "Deepak Chahar", "Ashwani Kumar"],
    player: ["https://documents.iplt20.com/ipl/IPLHeadshot2025/6.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/174.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/3103.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/993.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/3567.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/3107.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/75.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/781.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/98.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/91.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/3569.png"],
    teamDetails: ["Nita Ambani","Mahela Jayawardene", "Hardik Pandya"],
    flag: "https://static.vecteezy.com/system/resources/thumbnails/019/991/852/large/mumbai-indians-cricket-team-seamless-looping-flag-waving-background-indian-premier-league-looped-cloth-texture-slow-motion-3d-rendering-free-video.jpg"
  },

  // ================= KKR =================
  {
    teamName: "KKR",
    teamFullName: "Kolkata Knight Riders",
    winner: "https://media.gettyimages.com/id/2154269552/photo/kolkata-knight-riders-players-celebrate-with-the-trophy-after-winning-the-indian-premier.jpg?s=612x612&w=gi&k=20&c=gXyPqsTppsjoNcUtnmIEurkKLuU7UZyNA_s7uzf0G74=",
    teamFullName: "Kolkata Knight Riders",
    teamDescription: "Kolkata Knight Riders, also known as KKR, are a professional Twenty20 cricket team based in Kolkata, West Bengal, competing in the Indian Premier League (IPL). The franchise is recognized for its bold gameplay, energetic culture, and passionate supporters, making it one of the most vibrant and competitive teams in the tournament.",
    caption: "https://documents.iplt20.com/ipl/IPLHeadshot2025/44.png",
    captionName: "Ajinkya Rahane",
    playerName: ["Rinku Singh", "Quinton de Kock", "Rahmanullah Gurbaz", "Angkrish Raghuvanshi", "Manish Pandey", "Venkatesh Iyer", "Anukul Roy", "Moeen Ali", "Anrich Nortje", "Vaibhav Arora", "Mayank Markande"],
    player: ["https://documents.iplt20.com/ipl/IPLHeadshot2025/152.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/170.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/641.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/787.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/16.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/584.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/160.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/160.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/206.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/142.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/583.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/87.png"],
    teamDetails: ["Shah Rukh Khan" , "Chandrakant Pandit" , "Ajinkya Rahane"],
    flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShM0pnud9H2ddn8G_XhBGBMhWpXsUfkEmBJw&s"
  },

  // ================= RR =================
  {
    teamName: "RR",
    teamFullName: "Rashtriya Rifles",
    winner: "https://media.dtnext.in/imported/import/Articles/2020/Jun/202006011620522598_First-season-first-win-first-glimpse-of-royalty-RR_SECVPF.gif",
    teamFullName: "Rajasthan Royals",
    teamDescription: "Rajasthan Royals, or RR, are a professional Twenty20 cricket franchise based in Jaipur, Rajasthan, that competes in the Indian Premier League (IPL). The team is known for backing young talent, strategic gameplay, and fearless cricket, establishing a reputation as one of the most unpredictable and exciting sides in the league.",
    caption: "https://documents.iplt20.com/ipl/IPLHeadshot2025/190.png",
    captionName: "Sanju Samson",
    playerName: ["Shubham Dubey", "Vaibhav Suryavanshi", "Kunal Rathore", "Lhuan-dre Pretorius", "Shimron Hetmyer", "Yudhvir Singh Charak", "Jofra Archer", "Maheesh Theekshana", "Wanindu Hasaranga", "Akash Madhwal", "Kwena Maphaka"],
    player: ["https://documents.iplt20.com/ipl/IPLHeadshot2025/3112.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/3498.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/1540.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/2827.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/210.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/587.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/181.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/629.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/377.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/1045.png", "https://documents.iplt20.com/ipl/IPLHeadshot2025/801.png"],
    teamDetails: ["Royal Multisport Private Limited", "Rahul Dravid", "Sanju Samson"],
    flag: "https://static.india.com/wp-content/uploads/2018/01/rr-logo.jpg?impolicy=Medium_Resize&w=1200&h=800"
  },

  // // ================= SRH =================
  // {
  //   teamName: "SRH",
  //   winner: "https://images.indianexpress.com/2020/04/Warner-IPLfinal.jpg",
  //   teamFullName: "Sunrisers Hyderabad",
  //   teamDescription: "Sunrisers Hyderabad, commonly referred to as SRH, are a professional Twenty20 cricket team from Hyderabad, Telangana, taking part in the Indian Premier League (IPL). The franchise is celebrated for its strong bowling units, disciplined cricket, and consistent competitive spirit, making them a tough opponent for any side",
  //   caption: "",
  //   captionName: "",
  //   playerName: [],
  //   player: [],
  //   teamDetails: []
  // },

  // // ================= GT =================
  // {
  //   teamName: "GT",
  //   winner: "https://images.indianexpress.com/2022/05/GT-trophy.jpg",
  //   teamFullName: "Gujarat Titans",
  //   teamDescription: "Gujarat Titans, or GT, are a professional Twenty20 cricket franchise based in Ahmedabad, Gujarat, competing in the Indian Premier League (IPL). Known for their tactical depth, balanced squad composition, and fearless attitude, the team made an instant impact in the league with strong performances and sharp execution.",
  //   caption: "",
  //   captionName: "",
  //   playerName: [],
  //   player: [],
  //   teamDetails: []
  // },

]


btn.addEventListener('click', () => {

  let arr = Math.floor(Math.random() * teams.length)

  teamName.textContent = teams[arr].teamName;
  captionName.textContent = teams[arr].captionName
  caption.src = teams[arr].caption
  playerName.forEach((p, i) => {
    p.textContent = teams[arr].playerName[i]
  })
  player.forEach((img, i) => {
    img.src = teams[arr].player[i]
  })
  container.style.background = `url(${teams[arr].winner})no-repeat center center / cover`
  flag.src = teams[arr].flag
  teamDescription.textContent = teams[arr].teamDescription
  teamFullName.textContent = teams[arr].teamFullName
 listItems.forEach((li, i) => {
  const value = teams[arr].teamDetails[i] || "-";
  li.childNodes[1].textContent = " " + value;
});
})




