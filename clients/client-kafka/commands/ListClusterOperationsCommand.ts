import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListClusterOperationsRequest, ListClusterOperationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListClusterOperationsCommand,
  serializeAws_restJson1ListClusterOperationsCommand,
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

export interface ListClusterOperationsCommandInput extends ListClusterOperationsRequest {}
export interface ListClusterOperationsCommandOutput extends ListClusterOperationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
 */
export class ListClusterOperationsCommand extends $Command<
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListClusterOperationsCommandInput) {
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
  ): Handler<ListClusterOperationsCommandInput, ListClusterOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListClusterOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListClusterOperationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListClusterOperationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListClusterOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListClusterOperationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterOperationsCommandOutput> {
    return deserializeAws_restJson1ListClusterOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
