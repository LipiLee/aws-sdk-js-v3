import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";
import { JsonBlobsInputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1JsonBlobsCommand,
  serializeAws_restJson1JsonBlobsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface JsonBlobsCommandInput extends JsonBlobsInputOutput {}
export interface JsonBlobsCommandOutput extends JsonBlobsInputOutput, __MetadataBearer {}

/**
 * Blobs are base64 encoded
 */
export class JsonBlobsCommand extends $Command<
  JsonBlobsCommandInput,
  JsonBlobsCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: JsonBlobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<JsonBlobsCommandInput, JsonBlobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "JsonBlobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: JsonBlobsInputOutput.filterSensitiveLog,
      outputFilterSensitiveLog: JsonBlobsInputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: JsonBlobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1JsonBlobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<JsonBlobsCommandOutput> {
    return deserializeAws_restJson1JsonBlobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
