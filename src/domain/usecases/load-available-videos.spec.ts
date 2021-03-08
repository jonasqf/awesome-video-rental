
// ter objeto video
// ter objeto inventory
// load video list
// load video list with quantity greater than zero

class Rent {
    video: VideoMock
    dueDate: Date
    rentDate: Date
    value: number
    user: string

    constructor(video: VideoMock, dueDate: Date, value: number, user: string) {
        this.video = video
        this.dueDate = dueDate
        this.rentDate = new Date.now.prototype
        this.user = user
        this.value = value
    }
}



class VideoService {
    findAll() {
        const video1 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        const video2 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        const video3 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        let list: VideoMock[]=[]
        list.push(video1, video2, video3)
        return list
    }

    findByTitle(title: string) {
        const video1 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        return video1
    }
}

class VideoMock {
    title: string
    year: number
    writer: string
    imdbScore: number

    constructor (title: string, year: number, writer: string, imdbScore: number) {
        this.title = title
        this.year = year
        this.writer = writer
        this.imdbScore = imdbScore
    }
}

class InventoryService implements InventoryRepository {
    findAvailebleVideos(){
        const video1 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        const inv1 = new InventoryModel(1, video1)
        const video2 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        const inv2 = new InventoryModel(2, video2)
        const video3 = new VideoMock ('Conan the Barbarian 3', 1984, 'Robert E. Howard', 6.9)
        const inv3 = new InventoryModel(1, video3)
        
        let list: InventoryModel[]=[]
        list.push(inv1, inv2, inv3)
        return list
    }
    
    findAll() {
        const video1 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        const inv1 = new InventoryModel(1, video1)
        const video2 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        const inv2 = new InventoryModel(2, video2)
        const video3 = new VideoMock ('Conan the Barbarian 3', 1984, 'Robert E. Howard', 6.9)
        const inv3 = new InventoryModel(0, video3)
        
        let list: InventoryModel[]=[]
        list.push(inv1, inv2, inv3)
        return list
    }

    findByVideo(video: VideoMock) {
        const quantity = 1 
        return quantity
    }
}

interface InventoryRepository  {
    //findInventoryByVideo(video: VideoMock): VideoMock
    findAll()
    findByVideo(video: VideoMock)
}

class InventoryModel  {
    quantity: number
    video: VideoMock

    constructor( quantity: number, video: VideoMock){
        this.quantity
        this.video
    }
}

class LoadAvaliableVideos {
    constructor () {}

    loadVideos(): any {
        const inv = new InventoryService
        const listInv = inv.findAvailebleVideos()
    
        return listInv

    }
}

describe('LoadAvaliableVideos', () => {
    test('Should not load videos unavaileble, with inventory less than zero', async () => {
        const video1 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        const inventory1 = new LoadAvaliableVideos
        expect(inventory1.loadVideos()).toEqual({ quantity : 0 })
    })
});