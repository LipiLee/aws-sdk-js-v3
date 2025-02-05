import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { UpdateStreamInput, UpdateStreamOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateStreamCommand,
  serializeAws_restJson1UpdateStreamCommand,
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

export interface UpdateStreamCommandInput extends UpdateStreamInput {}
export interface UpdateStreamCommandOutput extends UpdateStreamOutput, __MetadataBearer {}

/**
 * <p>Updates stream metadata, such as the device name and media type.</p>
 *         <p>You must provide the stream name or the Amazon Resource Name (ARN) of the
 *             stream.</p>
 *         <p>To make sure that you have the latest version of the stream before updating it, you
 *             can specify the stream version. Kinesis Video Streams assigns a version to each stream.
 *             When you update a stream, Kinesis Video Streams assigns a new version number. To get the
 *             latest stream version, use the <code>DescribeStream</code> API. </p>
 *         <p>
 *             <code>UpdateStream</code> is an asynchronous operation, and takes time to
 *             complete.</p>
 */
export class UpdateStreamCommand extends $Command<
  UpdateStreamCommandInput,
  UpdateStreamCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStreamCommandInput, UpdateStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "UpdateStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStreamCommandOutput> {
    return deserializeAws_restJson1UpdateStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
