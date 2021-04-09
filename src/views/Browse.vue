<template>
  <div>
    <div class="create">
      <form v-on:submit.prevent="addChar">
        <input type="text" v-model="name" placeholder="Enter a name" />
        <br /><br />
        <p>Pick a class</p>
        <select id="professions-list" v-model="profession">
          <option value="Wizard">Wizard</option>
          <option value="Rogue">Rogue</option>
          <option value="Warrior">Warrior</option>
          <option value="Bard">Warrior</option>
        </select>
        <br /><br />
        <p>Enter a number between 8-20</p>
        <input type="number" v-model="str" placeholder="strength" />
        <input type="number" v-model="dex" placeholder="dexterity" />
        <input type="number" v-model="con" placeholder="constitution" />
        <input type="number" v-model="int" placeholder="intelligence" />
        <input type="number" v-model="cha" placeholder="charisma" />
        <input type="number" v-model="wis" placeholder="wisdom" />
        <br /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  </div>
</template>


<script>
export default { 
  data() {
    return {
      name: "",
      profession: "",
      str: "",
      dex: "",
      con: "",
      int: "",
      cha: "",
      wis: "",
    };
  },
  methods: {
    addChar() {
      this.$root.$data.products.push({
        name: this.name,
        profession: this.profession,
        str: this.str,
        dex: this.dex,
        con: this.con,
        int: this.int,
        cha: this.cha,
        wis: this.wis,
      });
      console.log(this.name),
        (this.name = ""),
        (this.str = ""),
        (this.dex = ""),
        (this.con = ""),
        (this.int = ""),
        (this.cha = ""),
        (this.wis = "");
    },
  },
};
</script>

<style scoped>
.create {
  display: flex;
  justify-content: center;
}
</style>