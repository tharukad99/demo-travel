const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Forest-reserves-875x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/National-parks-861x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/DSC_9501-1024x876.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Elephant-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/red-slender-loris.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/DSC3719-877x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Sloth-bear-1-1024x657.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Water-buffalow-1024x676.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Sppotted-deer-1024x683.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Sambar-deer-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Water-buffallo-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Salt-water-croc-1024x768.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Wild-boars-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Land-monitor-lizzard-1024x647.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Deers-3-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Gray-langer-2-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/DSC6525-1024x1019.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/DSC3625-1024x920.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/wild-rabbit-1024x658.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Asian-Open-bill-1024x675.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/chesnut-hawk-eagle-1024x768.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Green-bee-eaters-1024x768.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Hornbill-768x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Bar-tailed-godwit-1017x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/common-kingfisher-1024x649.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Grey-headed-fish-eagle.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Paintered-stork-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Blue-tail-bee-eater-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Commoron-764x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Hawk-eagle-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/peacock-1024x910.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Jungle-flowl-1024x683.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Crocs-1024x768.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Ruddy-mongoose.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Pied-kingfishers.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Elephant-on-a-lake-1024x731.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Gray-Langers-1024x682.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Sea-eagle-1024x680.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Giant-squirral-682x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Oriental-darter-781x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Purple-heron-758x1024.jpg",
    "https://wildceylonlk.com/wp-content/uploads/2025/05/Spotted-deers-1-688x1024.jpg"
];

const dir = path.join(__dirname, 'public', 'wildlife');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

urls.forEach(url => {
    const filename = path.basename(url);
    const dest = path.join(dir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, function(response) {
        response.pipe(file);
    });
});
console.log("Downloading images to", dir);
