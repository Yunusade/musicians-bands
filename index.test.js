const { where } = require("sequelize");
const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const testBand = await Band.create({ name: "jytegy", genre: "blues" });
    expect(testBand.name).toBe("jytegy");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const testMusician = await Musician.create({
      name: "Jlow",
      instrument: "Violin",
    });
    expect(testMusician.name).toBe("Jlow");
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const testBand = await Band.create({ name: "jytegy", genre: "blues" });
    let updatedBand = await testBand.update({name: "Baty"}, {
      where: {
        name: "jytegy"
      }
    })
    expect(updatedBand.name).toBe("Baty");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    const testMusician = await Musician.create({
      name: "Jlow",
      instrument: "Violin",
    });
    let updatedMusician = await testMusician.update({name: 'Bandz'}, {
      where : {
        name: "Jlow"
      }
    })
    expect(updatedMusician.name).toBe("Bandz");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    const testBand = await Band.create({ name: "jytegy", genre: "blues" });
    const deletedBand =  await Band.destroy({
      where: {
        name: "jytegy"
      }
    })
    expect(deletedBand).toBe("EXPECTED VALUE HERE");
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    expect("NO TEST").toBe("EXPECTED VALUE HERE");
  });
});
