import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { RemovePermissionInput } from "../models/models_0";
import {
  deserializeAws_queryRemovePermissionCommand,
  serializeAws_queryRemovePermissionCommand,
} from "../protocols/Aws_query";
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

export interface RemovePermissionCommandInput extends RemovePermissionInput {}
export interface RemovePermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes a statement from a topic's access control policy.</p>
 */
export class RemovePermissionCommand extends $Command<
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemovePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemovePermissionCommandInput, RemovePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "RemovePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemovePermissionInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemovePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemovePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemovePermissionCommandOutput> {
    return deserializeAws_queryRemovePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
