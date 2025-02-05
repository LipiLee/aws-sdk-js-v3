import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateBrokerCountRequest, UpdateBrokerCountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBrokerCountCommand,
  serializeAws_restJson1UpdateBrokerCountCommand,
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

export interface UpdateBrokerCountCommandInput extends UpdateBrokerCountRequest {}
export interface UpdateBrokerCountCommandOutput extends UpdateBrokerCountResponse, __MetadataBearer {}

/**
 * <p>Updates the number of broker nodes in the cluster.</p>
 */
export class UpdateBrokerCountCommand extends $Command<
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBrokerCountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateBrokerCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBrokerCountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBrokerCountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBrokerCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBrokerCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBrokerCountCommandOutput> {
    return deserializeAws_restJson1UpdateBrokerCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
