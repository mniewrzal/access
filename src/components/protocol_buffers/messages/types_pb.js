// source: types.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.macaroon.Caveat', null, global);
goog.exportSymbol('proto.macaroon.Caveat.Path', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.macaroon.Caveat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.macaroon.Caveat.repeatedFields_, null);
};
goog.inherits(proto.macaroon.Caveat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.macaroon.Caveat.displayName = 'proto.macaroon.Caveat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.macaroon.Caveat.Path = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.macaroon.Caveat.Path, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.macaroon.Caveat.Path.displayName = 'proto.macaroon.Caveat.Path';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.macaroon.Caveat.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.macaroon.Caveat.prototype.toObject = function(opt_includeInstance) {
  return proto.macaroon.Caveat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.macaroon.Caveat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.macaroon.Caveat.toObject = function(includeInstance, msg) {
  var f, obj = {
    disallowReads: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    disallowWrites: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    disallowLists: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    disallowDeletes: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    allowedPathsList: jspb.Message.toObjectList(msg.getAllowedPathsList(),
    proto.macaroon.Caveat.Path.toObject, includeInstance),
    nonce: msg.getNonce_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.macaroon.Caveat}
 */
proto.macaroon.Caveat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.macaroon.Caveat;
  return proto.macaroon.Caveat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.macaroon.Caveat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.macaroon.Caveat}
 */
proto.macaroon.Caveat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisallowReads(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisallowWrites(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisallowLists(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisallowDeletes(value);
      break;
    case 10:
      var value = new proto.macaroon.Caveat.Path;
      reader.readMessage(value,proto.macaroon.Caveat.Path.deserializeBinaryFromReader);
      msg.addAllowedPaths(value);
      break;
    case 30:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNonce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.macaroon.Caveat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.macaroon.Caveat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.macaroon.Caveat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.macaroon.Caveat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisallowReads();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDisallowWrites();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDisallowLists();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDisallowDeletes();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getAllowedPathsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.macaroon.Caveat.Path.serializeBinaryToWriter
    );
  }
  f = message.getNonce_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      30,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.macaroon.Caveat.Path.prototype.toObject = function(opt_includeInstance) {
  return proto.macaroon.Caveat.Path.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.macaroon.Caveat.Path} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.macaroon.Caveat.Path.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: msg.getBucket_asB64(),
    encryptedPathPrefix: msg.getEncryptedPathPrefix_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.macaroon.Caveat.Path}
 */
proto.macaroon.Caveat.Path.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.macaroon.Caveat.Path;
  return proto.macaroon.Caveat.Path.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.macaroon.Caveat.Path} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.macaroon.Caveat.Path}
 */
proto.macaroon.Caveat.Path.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBucket(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEncryptedPathPrefix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.macaroon.Caveat.Path.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.macaroon.Caveat.Path.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.macaroon.Caveat.Path} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.macaroon.Caveat.Path.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getEncryptedPathPrefix_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes bucket = 1;
 * @return {!(string|Uint8Array)}
 */
proto.macaroon.Caveat.Path.prototype.getBucket = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes bucket = 1;
 * This is a type-conversion wrapper around `getBucket()`
 * @return {string}
 */
proto.macaroon.Caveat.Path.prototype.getBucket_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBucket()));
};


/**
 * optional bytes bucket = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBucket()`
 * @return {!Uint8Array}
 */
proto.macaroon.Caveat.Path.prototype.getBucket_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBucket()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.macaroon.Caveat.Path} returns this
 */
proto.macaroon.Caveat.Path.prototype.setBucket = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes encrypted_path_prefix = 2;
 * @return {!(string|Uint8Array)}
 */
proto.macaroon.Caveat.Path.prototype.getEncryptedPathPrefix = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes encrypted_path_prefix = 2;
 * This is a type-conversion wrapper around `getEncryptedPathPrefix()`
 * @return {string}
 */
proto.macaroon.Caveat.Path.prototype.getEncryptedPathPrefix_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEncryptedPathPrefix()));
};


/**
 * optional bytes encrypted_path_prefix = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEncryptedPathPrefix()`
 * @return {!Uint8Array}
 */
proto.macaroon.Caveat.Path.prototype.getEncryptedPathPrefix_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEncryptedPathPrefix()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.macaroon.Caveat.Path} returns this
 */
proto.macaroon.Caveat.Path.prototype.setEncryptedPathPrefix = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool disallow_reads = 1;
 * @return {boolean}
 */
proto.macaroon.Caveat.prototype.getDisallowReads = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.macaroon.Caveat} returns this
 */
proto.macaroon.Caveat.prototype.setDisallowReads = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool disallow_writes = 2;
 * @return {boolean}
 */
proto.macaroon.Caveat.prototype.getDisallowWrites = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.macaroon.Caveat} returns this
 */
proto.macaroon.Caveat.prototype.setDisallowWrites = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool disallow_lists = 3;
 * @return {boolean}
 */
proto.macaroon.Caveat.prototype.getDisallowLists = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.macaroon.Caveat} returns this
 */
proto.macaroon.Caveat.prototype.setDisallowLists = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool disallow_deletes = 4;
 * @return {boolean}
 */
proto.macaroon.Caveat.prototype.getDisallowDeletes = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.macaroon.Caveat} returns this
 */
proto.macaroon.Caveat.prototype.setDisallowDeletes = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Path allowed_paths = 10;
 * @return {!Array<!proto.macaroon.Caveat.Path>}
 */
proto.macaroon.Caveat.prototype.getAllowedPathsList = function() {
  return /** @type{!Array<!proto.macaroon.Caveat.Path>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.macaroon.Caveat.Path, 10));
};


/**
 * @param {!Array<!proto.macaroon.Caveat.Path>} value
 * @return {!proto.macaroon.Caveat} returns this
*/
proto.macaroon.Caveat.prototype.setAllowedPathsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.macaroon.Caveat.Path=} opt_value
 * @param {number=} opt_index
 * @return {!proto.macaroon.Caveat.Path}
 */
proto.macaroon.Caveat.prototype.addAllowedPaths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.macaroon.Caveat.Path, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.macaroon.Caveat} returns this
 */
proto.macaroon.Caveat.prototype.clearAllowedPathsList = function() {
  return this.setAllowedPathsList([]);
};


/**
 * optional bytes nonce = 30;
 * @return {!(string|Uint8Array)}
 */
proto.macaroon.Caveat.prototype.getNonce = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * optional bytes nonce = 30;
 * This is a type-conversion wrapper around `getNonce()`
 * @return {string}
 */
proto.macaroon.Caveat.prototype.getNonce_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNonce()));
};


/**
 * optional bytes nonce = 30;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNonce()`
 * @return {!Uint8Array}
 */
proto.macaroon.Caveat.prototype.getNonce_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNonce()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.macaroon.Caveat} returns this
 */
proto.macaroon.Caveat.prototype.setNonce = function(value) {
  return jspb.Message.setProto3BytesField(this, 30, value);
};


goog.object.extend(exports, proto.macaroon);
