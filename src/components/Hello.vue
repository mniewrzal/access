<template>
  <div id="hello">
    <h2>Access Grant:</h2>
    <textarea v-model="input" placeholder="add multiple lines" @input="share" @change="share"></textarea>
    <br />
    <input type="checkbox" id="checkbox" v-model="caveat.allowDownload" @change="share" />
    <label for="checkbox">Allow Download</label>

    <input type="checkbox" id="checkbox" v-model="caveat.allowUpload" @change="share" />
    <label for="checkbox">Allow Upload</label>

    <input type="checkbox" id="checkbox" v-model="caveat.allowList" @change="share" />
    <label for="checkbox">Allow Lists</label>

    <input type="checkbox" id="checkbox" v-model="caveat.allowDelete" @change="share" />
    <label for="checkbox">Allow Deletes</label>
    <h2>Shared Access Grant:</h2>
    <label>Satellite Address</label>
    <label>{{ satelliteAddres }}</label>
    <br/>
    <textarea v-model="output" placeholder readonly="readonly"></textarea>
  </div>
</template>

<script>
export default {
  name: "hello",

  data() {
    return {
      input: "",
      satelliteAddres: "",
      output: "",
      caveat: {
        allowDownload: false,
        allowUpload: false,
        allowList: false,
        allowDelete: false
      }
    };
  },
  methods: {
    share: function() {
      var result = share(this.input, this.caveat);
      this.satelliteAddres = result.satelliteAddres;
      this.output = result.access;
    }
  }
};

function share(access, newCaveat) {
  const bs58check = require("bs58check");
  const macaroon = require("macaroon");

  var scopeMessage = require("./protocol_buffers/messages/scope_pb");
  var typesMessage = require("./protocol_buffers/messages/types_pb");

  const bytes = bs58check.decode(access);

  var scope = scopeMessage.Scope.deserializeBinary(
    bytes.subarray(1, bytes.length)
  );

  var m = macaroon.importMacaroon(scope.getApiKey());

  var caveat = new typesMessage.Caveat();
  caveat.setDisallowLists(!newCaveat.allowList);
  caveat.setDisallowReads(!newCaveat.allowDownload);
  caveat.setDisallowWrites(!newCaveat.allowUpload);
  caveat.setDisallowDeletes(!newCaveat.allowDelete);

  m.addFirstPartyCaveat(caveat.serializeBinary());
  scope.setApiKey(m.exportBinary());

  var serializedScope = scope.serializeBinary();

  var tmp = new Uint8Array(1 + serializedScope.byteLength);
  tmp.set(new Uint8Array(serializedScope), 1);

  return {
    satelliteAddres: scope.getSatelliteAddr(),
    access: bs58check.encode(tmp)
  };
}
</script>

<style scoped>
</style>
