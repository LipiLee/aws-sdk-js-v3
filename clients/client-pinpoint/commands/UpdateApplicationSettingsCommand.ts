import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateApplicationSettingsRequest, UpdateApplicationSettingsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateApplicationSettingsCommand,
  serializeAws_restJson1UpdateApplicationSettingsCommand,
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

export interface UpdateApplicationSettingsCommandInput extends UpdateApplicationSettingsRequest {}
export interface UpdateApplicationSettingsCommandOutput extends UpdateApplicationSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates the settings for an application.</p>
 */
export class UpdateApplicationSettingsCommand extends $Command<
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApplicationSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApplicationSettingsCommandInput, UpdateApplicationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateApplicationSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApplicationSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateApplicationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateApplicationSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationSettingsCommandOutput> {
    return deserializeAws_restJson1UpdateApplicationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
