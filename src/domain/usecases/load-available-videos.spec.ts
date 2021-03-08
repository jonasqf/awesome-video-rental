
// ter objeto video
// ter objeto inventory
// load video list
// load video list with quantity greater than zero


class LoadAvaliableVideos {
    constructor () {}

    loadVideos(): any {
     //   const inv = new InventoryService
     //   const listInv = inv.findAvailebleVideos()
    
        return null

    }
}

describe('LoadAvaliableVideos', () => {
    test('Should not load videos unavaileble, with inventory less than zero', async () => {
        //const video1 = new VideoMock ('Conan the Barbarian', 1984, 'Robert E. Howard', 6.9)
        const inventory1 = new LoadAvaliableVideos
        expect(inventory1.loadVideos()).toEqual({ quantity : 0 })
    })
});