import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DeleteSubscriberRequest, DeleteSubscriberResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSubscriberCommand,
  serializeAws_json1_1DeleteSubscriberCommand,
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

export interface DeleteSubscriberCommandInput extends DeleteSubscriberRequest {}
export interface DeleteSubscriberCommandOutput extends DeleteSubscriberResponse, __MetadataBearer {}

/**
 * <p>Deletes a subscriber.</p>
 * 		       <important>
 * 			         <p>Deleting the last subscriber to a notification also deletes the notification.</p>
 * 		       </important>
 */
export class DeleteSubscriberCommand extends $Command<
  DeleteSubscriberCommandInput,
  DeleteSubscriberCommandOutput,
  BudgetsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSubscriberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BudgetsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BudgetsClient";
    const commandName = "DeleteSubscriberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSubscriberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSubscriberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSubscriberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSubscriberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSubscriberCommandOutput> {
    return deserializeAws_json1_1DeleteSubscriberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
