import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { GetResourceShareAssociationsRequest, GetResourceShareAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetResourceShareAssociationsCommand,
  serializeAws_restJson1GetResourceShareAssociationsCommand,
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

export interface GetResourceShareAssociationsCommandInput extends GetResourceShareAssociationsRequest {}
export interface GetResourceShareAssociationsCommandOutput
  extends GetResourceShareAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the resources or principals for the resource shares that you own.</p>
 */
export class GetResourceShareAssociationsCommand extends $Command<
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceShareAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceShareAssociationsCommandInput, GetResourceShareAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "GetResourceShareAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceShareAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResourceShareAssociationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceShareAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourceShareAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetResourceShareAssociationsCommandOutput> {
    return deserializeAws_restJson1GetResourceShareAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
