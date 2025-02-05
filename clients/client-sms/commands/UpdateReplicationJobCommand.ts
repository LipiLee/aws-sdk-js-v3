import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { UpdateReplicationJobRequest, UpdateReplicationJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateReplicationJobCommand,
  serializeAws_json1_1UpdateReplicationJobCommand,
} from "../protocols/Aws_json1_1";
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

export interface UpdateReplicationJobCommandInput extends UpdateReplicationJobRequest {}
export interface UpdateReplicationJobCommandOutput extends UpdateReplicationJobResponse, __MetadataBearer {}

/**
 * <p>Updates the specified settings for the specified replication job.</p>
 */
export class UpdateReplicationJobCommand extends $Command<
  UpdateReplicationJobCommandInput,
  UpdateReplicationJobCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateReplicationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateReplicationJobCommandInput, UpdateReplicationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "UpdateReplicationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateReplicationJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateReplicationJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateReplicationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateReplicationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReplicationJobCommandOutput> {
    return deserializeAws_json1_1UpdateReplicationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
